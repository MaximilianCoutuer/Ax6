document.addEventListener("DOMContentLoaded", e => {
    const dimensions = {
        pacman: 1,
        cell: 15,
        enemy: 0.7
    }

    const pacman = {
        x: 1,
        y: 1,
        color: "yellow",
        radius: dimensions.cell / 2,
        speed: 1,
        direction: 0 // 0 = still, 1 = up, 2 = right, 3 = down, 4 = left
    }

    const tiles = [
        [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ],
        [
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            true
        ],
        [
            true,
            false,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            true
        ],
        [
            true,
            false,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            false,
            true
        ],
        [
            true,
            false,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            false,
            false
        ],
        [
            true,
            false,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            false
        ],
        [
            true,
            false,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            false
        ],
        [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            false,
            false,
            false
        ],
        [
            true,
            false,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            true,
            true
        ],
        [
            true,
            false,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            true
        ],
        [
            true,
            false,
            false,
            false,
            true,
            true,
            false,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            true
        ],
        [
            true,
            true,
            true,
            false,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ],
        [
            false,
            false,
            true,
            false,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            true
        ],
        [
            false,
            false,
            true,
            false,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            false,
            false
        ],
        [
            false,
            false,
            true,
            false,
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true
        ],
        [
            false,
            false,
            true,
            false,
            true,
            true,
            false,
            true,
            false,
            true,
            true,
            true,
            false,
            false,
            false,
            false
        ],
        [
            true,
            true,
            true,
            false,
            true,
            true,
            false,
            true,
            false,
            true,
            true,
            true,
            false,
            true,
            true,
            true
        ],
        [
            false,
            false,
            false,
            false,
            true,
            true,
            false,
            false,
            false,
            false,
            true,
            true,
            false,
            true,
            true,
            true
        ],
        [
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            false,
            true,
            true,
            true
        ],
        [
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            false,
            true,
            true,
            true
        ],
        [
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true
        ],
        [
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            false,
            true,
            true,
            true
        ],
        [
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            false,
            false,
            false,
            false
        ],
        [
            true,
            false,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            false,
            true,
            true,
            true
        ],
        [
            true,
            false,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            false,
            false
        ],
        [
            true,
            false,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            false,
            true
        ],
        [
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ],
        [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ]
    ];

    tiles.forEach(row => {
        for (let i = row.length - 2; i >= 0; i--) {
            row.push(row[i]);
        }
    })

    const enemies = [
        {
            x: 14,
            y: 13,
            size: 0.75,
            speed: 1,
            color: "red",
            direction: 0 // 0 = still, 1 = up, 2 = right, 3 = down, 4 = left
        },
        {
            x: 15,
            y: 13,
            size: 0.75,
            speed: 1,
            color: "orange",
            direction: 0 // 0 = still, 1 = up, 2 = right, 3 = down, 4 = left
        },
        {
            x: 16,
            y: 13,
            size: 0.75,
            speed: 1,
            color: "purple",
            direction: 0 // 0 = still, 1 = up, 2 = right, 3 = down, 4 = left
        }
    ];

    document.addEventListener("keydown", e => {
        setDirection(e.key);
    });

    const drawField = _ => {
        const ctx = field.ctx;
        ctx.clearRect(0, 0, field.width, field.height);
        let x = 0;
        let y = 0;
        let height = dimensions.cell;
        let width = dimensions.cell;
        ctx.fillStyle = "black";
        for (row of tiles) {
            for (cel of row) {
                if (cel) {
                    ctx.fillRect(x, y, width, height);
                }
                x += width;
            }
            y += height;
            x = 0;
        }

        for (enemy of enemies) {
            ctx.fillStyle = enemy.color;
            ctx.fillRect(enemy.x * dimensions.cell + (dimensions.cell * (1 - enemy.size) / 2), enemy.y * dimensions.cell + (dimensions.cell * (1 - enemy.size) / 2), enemy.size * dimensions.cell, enemy.size * dimensions.cell);
        }

        ctx.beginPath();
        ctx.fillStyle = pacman.color;
        ctx.arc(pacman.x * dimensions.cell + pacman.radius, pacman.y * dimensions.cell + pacman.radius, pacman.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();

        window.requestAnimationFrame(drawField);
    }

    const setDirection = newDirection => {
        switch (newDirection) {
            case "ArrowUp":
                pacman.direction = 1;
                break;
            case "ArrowDown":
                pacman.direction = 3;
                break;
            case "ArrowLeft":
                pacman.direction = 4;
                break;
            case "ArrowRight":
                pacman.direction = 2;
                break;
        }
        drawField();
    }

    const field = {
        canvas: document.getElementById("field"),
        width: 465,
        height: 420,
        ctx: undefined,
        init: () => {
            field.canvas.height = field.height;
            field.canvas.width = field.width;
            field.ctx = field.canvas.getContext("2d");
            window.requestAnimationFrame(drawField);
        }
    }
    field.init();

    window.setTimeout(e => {
        for (enemy of enemies) {
            enemy.direction = Math.floor(Math.random() * 4) + 1; // 0 = still, 1 = up, 2 = right, 3 = down, 4 = left
            switch (enemy.direction) {
                case 1:
                    enemy.y = 11;
                    break;
                case 2:
                    enemy.x = 18;
                    break;
                case 3:
                    enemy.y = 15;
                    break;
                case 4:
                    enemy.x = 12;
                    break;
            }
        }
    }, 2000)

    const changeDirection = (pawn, options) => {
        let newDirection = options[~~(Math.random() * options.length)];
        pawn.direction = newDirection.direction;
        newDirection.callback(pawn);
    }

    let moveinterval = window.setInterval(e => {
        for (pawn of enemies.concat([pacman])) {
            if (pawn.direction != 0) {
                switch (pawn.direction) { // 0 = still, 1 = up, 2 = right, 3 = down, 4 = left
                    case 1:
                        // if (canUp(pawn.x, pawn.y)) {
                        // moveUp(pawn);
                        // } 
                        // else {
                        if (pawn.radius) {
                            pawn.direction = 0;
                        } else {
                            let options = [];
                            canUp(pawn.x, pawn.y) ? options.push({ direction: 1, callback: moveUp }) : undefined;
                            canRight(pawn.x, pawn.y) ? options.push({ direction: 2, callback: moveRight }) : undefined;
                            canLeft(pawn.x, pawn.y) ? options.push({ direction: 4, callback: moveLeft }) : undefined;
                            changeDirection(pawn, options);
                        }
                        // }
                        break;
                    case 2:
                        // if (canRight(pawn.x, pawn.y)) {
                        //     moveRight(pawn);
                        // } 
                        // else {
                        if (pawn.radius) {
                            pawn.direction = 0;
                        } else {
                            let options = [];
                            canRight(pawn.x, pawn.y) ? options.push({ direction: 2, callback: moveRight }) : undefined;
                            canUp(pawn.x, pawn.y) ? options.push({ direction: 1, callback: moveUp }) : undefined;
                            canDown(pawn.x, pawn.y) ? options.push({ direction: 3, callback: moveDown }) : undefined;
                            changeDirection(pawn, options);
                        }
                        // }
                        break;
                    case 3:
                        // if (canDown(pawn.x, pawn.y)) {
                        //     moveDown(pawn);
                        // } 
                        // else {
                        if (pawn.radius) {
                            pawn.direction = 0;
                        } else {
                            let options = [];
                            canDown(pawn.x, pawn.y) ? options.push({ direction: 3, callback: moveDown }) : undefined;
                            canRight(pawn.x, pawn.y) ? options.push({ direction: 2, callback: moveRight }) : undefined;
                            canLeft(pawn.x, pawn.y) ? options.push({ direction: 4, callback: moveLeft }) : undefined;
                            changeDirection(pawn, options);
                        }
                        // }
                        break;
                    case 4:
                        // if (canLeft(pawn.x, pawn.y)) {
                        //     moveLeft(pawn);
                        // } 
                        // else {
                        if (pawn.radius) {
                            pawn.direction = 0;
                        } else {
                            let options = [];
                            canLeft(pawn.x, pawn.y) ? options.push({ direction: 4, callback: moveLeft }) : undefined;
                            canUp(pawn.x, pawn.y) ? options.push({ direction: 1, callback: moveUp }) : undefined;
                            canDown(pawn.x, pawn.y) ? options.push({ direction: 3, callback: moveDown }) : undefined;
                            changeDirection(pawn, options);
                        }
                        // }
                        break;
                }
            }
            if (eaten()) {
                console.log("Death");
            }
        }
    }, 250);

    const canLeft = (x, y) => !tiles[y][x - 1];
    const canRight = (x, y) => !tiles[y][x + 1];
    const canUp = (x, y) => !tiles[y - 1][x];
    const canDown = (x, y) => !tiles[y + 1][x];
    const moveLeft = pawn => pawn.x - 1 < 0 ? pawn.x = 31 : pawn.x -= 1;
    const moveRight = pawn => pawn.x + 1 > 31 ? pawn.x = 0 : pawn.x += 1;
    const moveUp = pawn => pawn.y -= 1;
    const moveDown = pawn => pawn.y += 1;
    const eaten = _ => {
        let hit = false;
        for (enemy of enemies) {
            if (pacman.x === enemy.x && pacman.y === enemy.y) {
                console.log("hit: " + enemy.color);
                hit = true;
            }
        }
        return hit;
    }
})
