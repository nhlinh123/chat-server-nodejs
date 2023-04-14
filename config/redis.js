// import { createClient } from 'redis';
//
//
//
// const redisUrl = `redis://localhost:6379`;
// const redisClient = createClient({
//     url: redisUrl,
// });
//
// const connectRedis = async () => {
//     try {
//         await redisClient.connect();
//         console.log('Redis client connected...');
//     } catch (err: any) {
//         console.log(err.message);
//         setTimeout(connectRedis, 5000);
//     }
// };
//
// connectRedis();
//
// redisClient.on('error', (err) => console.log(err));
//
// export default redisClient;
//
// import { createClient } from 'redis';
//
// const redisUrl = `redis://localhost:6379`;
// const redisClient = createClient({
//     url: redisUrl,
// });
//
// const connectRedis = async () => {
//     try {
//         await redisClient.connect();
//         console.log('Redis client connected...');
//     } catch (err: any) {
//         console.log(err.message);
//         setTimeout(connectRedis, 5000);
//     }
// };
//
// connectRedis();
//
// redisClient.on('error', (err) => console.log(err));
//
// export default redisClient;
//
const redis = require('redis');

const redisUrl = `redis://localhost:6379`;
const redisClient = redis.createClient({
    url: redisUrl,
});

const connectRedis = async function() {
    try {
        await redisClient.connect();
        console.log('Redis client connected...');
    } catch (e) {
        console.log(e);
        console.log('Retry connect in 5s');
        setTimeout(() => connectRedis(), 5000);
    }
}

module.exports = connectRedis();
