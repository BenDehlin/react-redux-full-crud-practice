UPDATE users
SET (name, age, email) = ($2, $3, $4)
WHERE id = $1;
SELECT * FROM users ORDER BY id;