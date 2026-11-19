
CREATE TABLE players (
    id INTEGER PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE game_scores (
    id INTEGER PRIMARY KEY,
    player_id INTEGER,
    game_name VARCHAR(50),
    score INTEGER DEFAULT 0,

    FOREIGN KEY (player_id)
    REFERENCES players(id)
);
