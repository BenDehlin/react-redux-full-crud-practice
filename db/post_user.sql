INSERT INTO users (name, age, email)
VALUES ($1, $2, $3);
SELECT * FROM users ORDER BY id;