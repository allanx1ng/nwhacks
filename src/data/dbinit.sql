CREATE DATABASE ubc_course_list;
USE ubc_course_list;

CREATE TABLE courses (
    department TEXT NOT NULL,
    number INT
);

-- CREATE TABLE player_scores (
--     id SERIAL,
--     player_id INTEGER NOT NULL,
--     score INTEGER NOT NULL,
--     CONSTRAINT "player_scores_pkey" PRIMARY KEY (id ASC),
--     CONSTRAINT fk_player FOREIGN KEY (player_id) REFERENCES players(id)
-- );

-- CREATE INDEX player_scores_player_id on player_scores(player_id);
-- CREATE INDEX player_scores_score on player_scores(score);

INSERT INTO courses (department, number) VALUES ('CPSC', '110');
INSERT INTO courses (department, number) VALUES ('MATH', '101');
