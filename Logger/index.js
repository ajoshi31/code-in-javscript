const {userLogger, paymentLogger} = require('./logger');

userLogger.info('User created!',
    {
        userID: `$12`,
        name: 'Atul Joshi',
        email: 'ajoshi.biz@gmail.com'
    },
);

let err = new Error('Test')

userLogger.error('User created!',
    {
        userID: `$12`,
        name: 'Atul Joshi',
        email: 'ajoshi.biz@gmail.com', err: err
    },
);
