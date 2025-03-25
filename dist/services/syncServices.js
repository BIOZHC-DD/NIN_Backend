"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.watermelonSync = void 0;
class watermelonSync {
    constructor(prisma, tables) {
        this.tableOrder = [
            'patients',
            'clinicals',
            'visits',
            'intervals',
        ];
        this.prisma = prisma;
        this.tables = tables;
    }
    syncPush(clientChange) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Syncing changes:', clientChange);
            try {
                yield this.prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    // Process tables in specified order
                    for (const tableName of this.tableOrder) {
                        if (!clientChange[tableName])
                            continue;
                        console.log(`Processing table: ${tableName}`);
                        const tableSchema = this.tables.find((table) => table.name === tableName);
                        if (!tableSchema) {
                            console.warn(`Schema not found for table: ${tableName}`);
                            continue;
                        }
                        yield this.processTableChanges(tableName, clientChange[tableName], tableSchema, tx);
                    }
                }), { timeout: 180000 });
            }
            catch (error) {
                console.error('Error syncing changes:', error);
                throw error;
            }
        });
    }
    processTableChanges(tableName, tableChanges, tableSchema, tx) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            const model = tx[tableSchema.prismaName];
            if (!model) {
                console.warn(`Model not found for table: ${tableName}`);
                return;
            }
            try {
                // Process created records
                if ((_a = tableChanges.created) === null || _a === void 0 ? void 0 : _a.length) {
                    console.log(`Creating ${tableChanges.created.length} records in ${tableName}`);
                    const sanitizedRecords = tableChanges.created.map((record) => {
                        return this.sanitizeRecord(record);
                    });
                    yield model.createMany({
                        data: sanitizedRecords,
                    });
                }
                // Process updated records
                if ((_b = tableChanges.updated) === null || _b === void 0 ? void 0 : _b.length) {
                    console.log(`Updating ${tableChanges.updated.length} records in ${tableName}`);
                    for (const record of tableChanges.updated) {
                        const sanitizedRecord = this.sanitizeRecord(record);
                        const existing = yield model.findUnique({
                            where: { id: sanitizedRecord.id },
                        });
                        if (existing) {
                            yield model.update({
                                where: { id: sanitizedRecord.id },
                                data: sanitizedRecord,
                            });
                        }
                        else {
                            console.warn(`Record ${sanitizedRecord.id} not found in ${tableName}`);
                        }
                    }
                }
                // Process deleted records
                if ((_c = tableChanges.deleted) === null || _c === void 0 ? void 0 : _c.length) {
                    console.log(`Soft deleting ${tableChanges.deleted.length} records in ${tableName}`);
                    for (const id of tableChanges.deleted) {
                        yield model.update({
                            where: { id },
                            data: {
                                deleted_at: new Date(),
                                updated_at: new Date(),
                            },
                        });
                    }
                }
            }
            catch (error) {
                console.error(`Error processing ${tableName}:`, error);
                throw error;
            }
        });
    }
    sanitizeRecord(record) {
        const { server_createdAt, server_updatedAt, server_deletedAt, created_at, updated_at, _status, _changed } = record, sanitizedRecord = __rest(record, ["server_createdAt", "server_updatedAt", "server_deletedAt", "created_at", "updated_at", "_status", "_changed"]);
        return sanitizedRecord;
    }
    pullChanges(lastPulledAt) {
        return __awaiter(this, void 0, void 0, function* () {
            const changes = {};
            const lastPulledAt_UTC = new Date(lastPulledAt * 1000).toISOString();
            // Process tables in the specified order for consistency
            for (const tableName of this.tableOrder) {
                const tableSchema = this.tables.find((table) => table.name === tableName);
                if (!tableSchema)
                    continue;
                if (tableName === 'sensorvalues') {
                    console.log('Skipping table:', tableName);
                    continue;
                }
                console.log('Pulling changes for table:', tableName);
                changes[tableName] = {
                    created: [],
                    updated: [],
                    deleted: [],
                };
                const records = yield tableSchema.model.findMany({
                    where: {
                        server_updatedAt: {
                            gt: new Date(lastPulledAt_UTC),
                        },
                        OR: [
                            { server_deletedAt: null },
                            { server_deletedAt: { gt: new Date(lastPulledAt_UTC) } },
                        ],
                    },
                    orderBy: {
                        server_updatedAt: 'asc',
                    },
                });
                for (const record of records) {
                    if (record.server_deletedAt) {
                        changes[tableName].deleted.push(record.id);
                    }
                    else if (new Date(record.server_createdAt) > new Date(lastPulledAt_UTC)) {
                        changes[tableName].updated.push(this.sanitizeRecord(record));
                    }
                    else if (new Date(record.server_updatedAt) > new Date(lastPulledAt_UTC)) {
                        changes[tableName].updated.push(this.sanitizeRecord(record));
                    }
                }
            }
            return changes;
        });
    }
}
exports.watermelonSync = watermelonSync;
