export const Config = {
    fontFamily: 'Cairo, Arial, sans-serif',
    grid: {
        cols: 5, // dots horizontal (4x6 = 20 rectangles for level 1)
        rows: 6, // dots vertical
        spacing: 80, // distance between dots (mobile-friendly)
    },
    players: [
        { id: 1, name: 'اللاعب 1', color: 0x00bcd4, boxColor: 0x00bcd4, initial: '1', colorHex: '#00bcd4' },
        { id: 2, name: 'اللاعب 2', color: 0xff4081, boxColor: 0xff4081, initial: '2', colorHex: '#ff4081' },
    ],
    // AI difficulty settings
    ai: {
        easy: {
            thinkTime: 1000, // ms
            randomness: 0.5, // 50% random moves
        },
        medium: {
            thinkTime: 800,
            randomness: 0.2, // 20% random moves
        },
        hard: {
            thinkTime: 600,
            randomness: 0, // Always optimal
        }
    },
    // Power-ups available per player per level
    powerUps: {
        suggestMove: { icon: '💡', name: 'اقتراح خط', uses: 1 },
        skipTurn: { icon: '⏭', name: 'تخطي الدور', uses: 1 },
        addTime: { icon: '⏱', name: '+5 ثواني', uses: 1 }
    },
    lineThickness: 8,
    dotRadius: 8,
    comboBonus: 1, // bonus points for multiple rectangles in one move
    obstacleColor: 0x9e9e9e,
    // Level-specific color schemes
    levelColors: [
        { p1: { color: 0x00bcd4, hex: '#00bcd4' }, p2: { color: 0xff4081, hex: '#ff4081' } }, // Level 1
        { p1: { color: 0x4CAF50, hex: '#4CAF50' }, p2: { color: 0xFF9800, hex: '#FF9800' } }, // Level 2
        { p1: { color: 0x9C27B0, hex: '#9C27B0' }, p2: { color: 0xFFEB3B, hex: '#FFEB3B' } }, // Level 3
        { p1: { color: 0x00BCD4, hex: '#00BCD4' }, p2: { color: 0xE91E63, hex: '#E91E63' } }, // Level 4
        { p1: { color: 0x3F51B5, hex: '#3F51B5' }, p2: { color: 0xFF5722, hex: '#FF5722' } }, // Level 5
        { p1: { color: 0x009688, hex: '#009688' }, p2: { color: 0xF44336, hex: '#F44336' } }, // Level 6
        { p1: { color: 0x673AB7, hex: '#673AB7' }, p2: { color: 0xFFC107, hex: '#FFC107' } }, // Level 7
        { p1: { color: 0x2196F3, hex: '#2196F3' }, p2: { color: 0xFF6F00, hex: '#FF6F00' } }, // Level 8
        { p1: { color: 0x8BC34A, hex: '#8BC34A' }, p2: { color: 0xE91E63, hex: '#E91E63' } }, // Level 9
        { p1: { color: 0x00E676, hex: '#00E676' }, p2: { color: 0xFF1744, hex: '#FF1744' } }, // Level 10
    ],
    levels: [
        { 
            level: 1, 
            cols: 5, 
            rows: 6, 
            targetBoxes: 20,
            turnTime: 20, // More time for beginners
            obstacles: []
        },
        { 
            level: 2, 
            cols: 6, 
            rows: 6, 
            targetBoxes: 25,
            turnTime: 18,
            obstacles: [
                { type: 'L', baseR: 0, baseC: 1, rotation: 0 },
                { type: 'L', baseR: 3, baseC: 3, rotation: 180 }
            ]
        },
        { 
            level: 3, 
            cols: 6, 
            rows: 7, 
            targetBoxes: 30,
            turnTime: 16,
            obstacles: [
                { type: 'L', baseR: 2, baseC: 1, rotation: 90 },
                { type: 'L', baseR: 2, baseC: 4, rotation: 270 }
            ]
        },
        { 
            level: 4, 
            cols: 7, 
            rows: 7, 
            targetBoxes: 36,
            turnTime: 15,
            obstacles: [
                { type: 'cross', baseR: 3, baseC: 3 }
            ]
        },
        { 
            level: 5, 
            cols: 7, 
            rows: 8, 
            targetBoxes: 42,
            turnTime: 14,
            obstacles: [
                { type: 'L', baseR: 2, baseC: 2 },
                { type: 'L', baseR: 4, baseC: 4, rotation: 180 }
            ]
        },
        { 
            level: 6, 
            cols: 8, 
            rows: 8, 
            targetBoxes: 49,
            turnTime: 13,
            obstacles: [
                { type: 'cross', baseR: 2, baseC: 2 },
                { type: 'cross', baseR: 5, baseC: 5 }
            ]
        },
        { 
            level: 7, 
            cols: 8, 
            rows: 9, 
            targetBoxes: 56,
            turnTime: 12,
            obstacles: [
                { type: 'L', baseR: 3, baseC: 2, rotation: 0 },
                { type: 'L', baseR: 3, baseC: 5, rotation: 270 }
            ]
        },
        { 
            level: 8, 
            cols: 9, 
            rows: 9, 
            targetBoxes: 64,
            turnTime: 11,
            obstacles: [
                { type: 'cross', baseR: 4, baseC: 4 }
            ]
        },
        { 
            level: 9, 
            cols: 9, 
            rows: 10, 
            targetBoxes: 72,
            turnTime: 10,
            obstacles: [
                { type: 'L', baseR: 3, baseC: 3 },
                { type: 'L', baseR: 6, baseC: 5, rotation: 180 }
            ]
        },
        { 
            level: 10, 
            cols: 10, 
            rows: 10, 
            targetBoxes: 81,
            turnTime: 10, // Fast-paced final level
            obstacles: [
                { type: 'cross', baseR: 3, baseC: 3 },
                { type: 'cross', baseR: 6, baseC: 6 }
            ]
        },
    ],
};
