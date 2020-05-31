import { BasePath, CivDef, CivGame, DLC, GameSpeed, Map, MapSize, Platform, RANDOM_CIV, GameStore } from './civdefs';

class BeyondEarthDef extends CivDef {
    getImageFileName() {
        // tslint:disable no-use-before-declare
        return `${BEYOND_EARTH_GAME.assetPrefix}${this.civKey.replace('CIVILIZATION_', '')}_${this.leaderKey.replace('LEADER_', '')}.png`;
    }
}

export const BEYOND_EARTH_DLCS: DLC[] = [
    new DLC('54df493fb668d144a930a168628faa59', 'Exoplanets Map Pack'),
    new DLC('57b2d25491c545408f17a69f033166c7', 'Rising Tide', true)
];

export const BEYOND_EARTH_LEADERS = [
    RANDOM_CIV,
    new BeyondEarthDef('CIVILIZATION_ARC', 'LEADER_ARC', {
        leaderDisplayName: 'American Reclamation Corporation',
        justShowLeaderName: true
    }),
    new BeyondEarthDef('CIVILIZATION_AFRICAN_UNION', 'LEADER_AFRICAN_UNION', {
        leaderDisplayName: 'People\'s African Union',
        justShowLeaderName: true
    }),
    new BeyondEarthDef('CIVILIZATION_BRASILIA', 'LEADER_BRASILIA', {
        justShowLeaderName: true
    }),
    new BeyondEarthDef('CIVILIZATION_PAN_ASIA', 'LEADER_PAN_ASIA', {
        leaderDisplayName: 'Pan-Asian Cooperative',
        justShowLeaderName: true
    }),
    new BeyondEarthDef('CIVILIZATION_FRANCO_IBERIA', 'LEADER_FRANCO_IBERIA', {
        leaderDisplayName: 'Franco-Iberia',
        justShowLeaderName: true
    }),
    new BeyondEarthDef('CIVILIZATION_KAVITHAN', 'LEADER_INDIA', {
        leaderDisplayName: 'Kavithan Protectorate',
        justShowLeaderName: true
    }),
    new BeyondEarthDef('CIVILIZATION_POLYSTRALIA', 'LEADER_POLYSTRALIA', {
        justShowLeaderName: true
    }),
    new BeyondEarthDef('CIVILIZATION_RUSSIA', 'LEADER_RUSSIA', {
        leaderDisplayName: 'Slavic Federation',
        justShowLeaderName: true
    }),
    new BeyondEarthDef('CIVILIZATION_AL_FALAH', 'LEADER_AL_FALAH', {
        dlcId: '57b2d25491c545408f17a69f033166c7',
        justShowLeaderName: true
    }),
    new BeyondEarthDef('CIVILIZATION_NORTH_SEA_ALLIANCE', 'LEADER_NORTH_SEA_ALLIANCE', {
        dlcId: '57b2d25491c545408f17a69f033166c7',
        justShowLeaderName: true
    }),
    new BeyondEarthDef('CIVILIZATION_INTEGR', 'LEADER_INTEGR', {
        leaderDisplayName: 'INTEGR',
        dlcId: '57b2d25491c545408f17a69f033166c7',
        justShowLeaderName: true
    }),
    new BeyondEarthDef('CIVILIZATION_CHUNGSU', 'LEADER_CHUNGSU', {
        dlcId: '57b2d25491c545408f17a69f033166c7',
        justShowLeaderName: true
    })
];

export const BEYOND_EARTH_GAME_SPEEDS = new Array<GameSpeed>(
    new GameSpeed('GAMESPEED_QUICK', 'Quick'),
    new GameSpeed('GAMESPEED_STANDARD', 'Standard'),
    new GameSpeed('GAMESPEED_EPIC', 'Epic'),
    new GameSpeed('GAMESPEED_MARATHON', 'Marathon')
);

export const BEYOND_EARTH_MAP_SIZES = new Array<MapSize>(
    new MapSize('WORLDSIZE_DUEL', 'Duel', 2),
    new MapSize('WORLDSIZE_TINY', 'Tiny', 4),
    new MapSize('WORLDSIZE_SMALL', 'Small', 6),
    new MapSize('WORLDSIZE_STANDARD', 'Standard', 8),
    new MapSize('WORLDSIZE_LARGE', 'Massive', 8)
);

export const BEYOND_EARTH_MAPS = new Array<Map>(
    new Map('Assets\\Maps\\Protean.lua', 'Protean'),
);

export const BEYOND_EARTH_GAME: CivGame = {
    id: 'BEYOND_EARTH',
    displayName: 'Beyond Earth',
    turnTimerSupported: true,
    assetPrefix: 'BEYOND_EARTH_',
    dlcs: BEYOND_EARTH_DLCS,
    gameSpeeds: BEYOND_EARTH_GAME_SPEEDS,
    leaders: BEYOND_EARTH_LEADERS,
    maps: BEYOND_EARTH_MAPS,
    mapSizes: BEYOND_EARTH_MAP_SIZES,
    saveLocations: {
        [Platform.Windows]: { basePath: BasePath.DOCUMENTS, prefix: '/My Games' },
        [Platform.OSX]: { basePath: BasePath.APP_DATA, prefix: '' },
        [Platform.Linux]: { basePath: BasePath.HOME, prefix: '/.local/share/aspyr-media' }
    },
    dataPaths: {
        [GameStore.Steam]: '/Sid Meier\'s Civilization Beyond Earth'
    },
    savePath: '/Saves/hotseat/',
    saveExtension: 'CivBESave',
    runUrls: {
        [GameStore.Steam]: 'steam://run/65980/\\dx11'
    }
};
