/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         Email:
 *           type: string
 *           format: email
 *           description: The email address of the user.
 *           example: user@example.com
 *         Password:
 *           type: string
 *           description: The password of the user.
 *           example: mysecurepassword
 *         Name:
 *           type: string
 *           description: The name of the user.
 *           example: John Doe
 *         ProfilePicture:
 *           type: string
 *           description: The URL of the user's profile picture.
 *           example: http://example.com/profile.jpg
 *         Location:
 *           type: object
 *           properties:
 *             city:
 *               type: string
 *               description: The city where the user is located.
 *               example: New York
 *             country:
 *               type: string
 *               description: The country where the user is located.
 *               example: United States
 *         Verified:
 *           type: boolean
 *           description: Indicates whether the user's email is verified.
 *           example: true
 *         Role:
 *           type: string
 *           description: The role of the user.
 *           example: User
 *         Tutorial:
 *           type: boolean
 *           description: Indicates whether the user has completed a tutorial.
 *           example: true
 *         Library:
 *           type: object
 *           properties:
 *             Music:
 *               type: array
 *               description: The user's music library.
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: The name of the music item.
 *                   artist:
 *                     type: string
 *                     description: The artist of the music item.
 *                   image:
 *                     type: string
 *                     description: The URL of the music item's image.
 *             Books:
 *               type: array
 *               description: The user's book library.
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: The name of the book item.
 *                   writer:
 *                     type: string
 *                     description: The writer of the book item.
 *                   image:
 *                     type: string
 *                     description: The URL of the book item's image.
 *             Games:
 *               type: array
 *               description: The user's game library.
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: The name of the game item.
 *                   company:
 *                     type: string
 *                     description: The company of the game item.
 *                   image:
 *                     type: string
 *                     description: The URL of the game item's image.
 *             Movies:
 *               type: array
 *               description: The user's movie library.
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: The name of the movie item.
 *                   preview:
 *                     type: string
 *                     description: The URL of the movie item's preview.
 *                   image:
 *                     type: string
 *                     description: The URL of the movie item's image.
 *         Followers:
 *           type: array
 *           description: List of users who are following this user.
 *           items:
 *             type: string
 *           example: []
 *       required:
 *         - Email
 *         - Password
 *         - Name
 *       example:
 *         Email: user@example.com
 *         Password: mysecurepassword
 *         Name: John Doe
 *         ProfilePicture: http://example.com/profile.jpg
 *         Location:
 *           city: New York
 *           country: United States
 *         Verified: true
 *         Role: User
 *         Tutorial: true
 *         Library:
 *           Music:
 *             - name: Song Name
 *               artist: Artist Name
 *               image: http://example.com/song.jpg
 *           Books:
 *             - name: Book Title
 *               writer: Author Name
 *               image: http://example.com/book.jpg
 *           Games:
 *             - name: Game Title
 *               company: Game Company
 *               image: http://example.com/game.jpg
 *           Movies:
 *             - name: Movie Title
 *               preview: http://example.com/movie_preview.mp4
 *               image: http://example.com/movie.jpg
 *         Followers: []
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     VerifyAccount:
 *       type: object
 *       required:
 *         - userId
 *         - uniqueString
 *         - createdAt
 *         - expireAt
 *       properties:
 *         userId:
 *           type: string
 *           description: The ID of the user associated with the verification account.
 *         uniqueString:
 *           type: string
 *           description: A unique string for account verification.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the verification account was created.
 *         expireAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the verification account will expire.
 *       example:
 *         userId: 123456789
 *         uniqueString: abcdef123456
 *         createdAt: "2023-08-22T12:00:00Z"
 *         expireAt: "2023-08-30T12:00:00Z"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         content:
 *           type: string
 *           description: The content of the post.
 *           example: This is a great post!
 *         user:
 *           type: string
 *           description: The ID of the user who created the post.
 *           example: 6155f7cfcf971234567890ab
 *         image:
 *           type: string
 *           description: The URL of the post image.
 *           example: http://example.com/post_image.jpg
 *         comments:
 *           type: array
 *           description: List of comments on the post.
 *           items:
 *             type: string
 *             example: 6155f7cfcf971234567890cd
 *         likes:
 *           type: array
 *           description: List of reactions (likes, loves, etc.) on the post.
 *           items:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 description: The ID of the user who reacted.
 *                 example: 6155f7cfcf971234567890ef
 *               reactionType:
 *                 type: string
 *                 description: The type of reaction.
 *                 enum: ['like', 'love', 'wow', 'haha', 'sad', 'angry']
 *                 example: like
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the post was created.
 *           example: 2023-08-22T12:34:56Z
 *       required:
 *         - content
 *         - user
 *       example:
 *         content: This is a great post!
 *         user: 6155f7cfcf971234567890ab
 *         image: http://example.com/post_image.jpg
 *         comments: []
 *         likes: []
 *         createdAt: 2023-08-22T12:34:56Z
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         content:
 *           type: string
 *           description: The content of the comment.
 *           example: This is a great comment!
 *         user:
 *           type: string
 *           description: The ID of the user who created the comment.
 *           example: 6155f7cfcf971234567890ab
 *         post:
 *           type: string
 *           description: The ID of the post to which the comment belongs.
 *           example: 6155f7cfcf971234567890cd
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the comment was created.
 *           example: 2023-08-22T12:34:56Z
 *       required:
 *         - content
 *         - user
 *         - post
 *       example:
 *         content: This is a great comment!
 *         user: 6155f7cfcf971234567890ab
 *         post: 6155f7cfcf971234567890cd
 *         createdAt: 2023-08-22T12:34:56Z
 */


/**
 * @swagger
 * /register:
 *   post:
 *     tags: [Authentication]
 *     summary: Register a new user
 *     description: Register a new user with the provided email, password, and username.
 *     parameters:
 *       - in: body
 *         name: registrationData
 *         description: The registration data for the new user.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email_reg:
 *               type: string
 *               format: email
 *               description: The email address of the user for registration.
 *             password_reg:
 *               type: string
 *               description: The password of the user for registration.
 *             username_reg:
 *               type: string
 *               description: The username of the user for registration.
 *         example:
 *           email_reg: user@example.com
 *           password_reg: mysecurepassword
 *           username_reg: john_doe
 *     responses:
 *       200:
 *         description: User successfully registered.
 *         content:
 *           application/json:
 *             example:
 *               message: Registration successful. Verification email sent.
 *       400:
 *         description: Bad request or validation error.
 *         content:
 *           application/json:
 *             example:
 *               error: Validation failed. Please check your input.
 *       403:
 *         description: Email already used.
 *         content:
 *           application/json:
 *             example:
 *               message: Email Already Used!
 *       404:
 *         description: Error while registering user.
 *         content:
 *           application/json:
 *             example:
 *               error: An error occurred while registering the user.
 *       402:
 *         description: Verification email already sent for forgot password.
 *         content:
 *           application/json:
 *             example:
 *               message: You have already sent a verification email.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An internal server error occurred.
 */

/**
 * @swagger
 * /verify/{userId}/{uniqueString}:
 *   get:
 *     tags: [Authentication]
 *     summary: Verify user email
 *     description: Verify user email using the provided userId and uniqueString.
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: The ID of the user to be verified.
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: uniqueString
 *         description: The unique string for email verification.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Email successfully verified.
 *         content:
 *           application/json:
 *             example:
 *               message: Email verified successfully.
 *       403:
 *         description: Verification failed.
 *         content:
 *           application/json:
 *             example:
 *               message: Verification failed.
 *       404:
 *         description: Verification link expired or user not found.
 *         content:
 *           application/json:
 *             example:
 *               message: Verification link expired or user not found.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An internal server error occurred.
 */


/**
 * @swagger
 * /login:
 *   post:
 *     tags: [Authentication]
 *     summary: User login
 *     description: Authenticate user credentials and generate a JWT token for authorized access.
 *     parameters:
 *       - in: body
 *         name: loginData
 *         description: The login credentials for the user.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email_log:
 *               type: string
 *               format: email
 *               description: The email address of the user for login.
 *             password_log:
 *               type: string
 *               description: The password of the user for login.
 *         example:
 *           email_log: user@example.com
 *           password_log: mysecurepassword
 *     responses:
 *       200:
 *         description: User successfully logged in.
 *         content:
 *           application/json:
 *             example:
 *               message: Login successful.
 *               token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (JWT token)
 *               role: User
 *               csrfToken: 6d2b7be0-1b58-4ccf-85b2-09d6e97c1060
 *       403:
 *         description: Unauthorized access.
 *         content:
 *           application/json:
 *             example:
 *               message: Email is not verified or Username or Password is incorrect.
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               message: Username or Password is incorrect.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An internal server error occurred.
 */


/**
 * @swagger
 * /ForgotPassword:
 *   post:
 *     tags: [Authentication]
 *     summary: Request password reset
 *     description: Send a verification email to initiate the password reset process.
 *     parameters:
 *       - in: body
 *         name: resetData
 *         description: The username of the user requesting password reset.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             forgot_pass_email:
 *               type: string
 *               description: The username of the user for password reset.
 *         example:
 *           forgot_pass_email: john_doe
 *     responses:
 *       200:
 *         description: Password reset email sent.
 *         content:
 *           application/json:
 *             example:
 *               message: Password reset email sent. Check your inbox.
 *       402:
 *         description: Password reset email already sent.
 *         content:
 *           application/json:
 *             example:
 *               message: You have already sent a password reset email.
 *       404:
 *         description: User not found.
 *         content:
 *           application/json:
 *             example:
 *               message: User isn't Exist!
 *       403:
 *         description: Error occurred.
 *         content:
 *           application/json:
 *             example:
 *               message: Error!
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An internal server error occurred.
 */

// Your controller code...

/**
 * @swagger
 * /reset_password/{userId}/{uniqueString}:
 *   get:
 *     tags: [Authentication]
 *     summary: Respond to password reset request
 *     description: Respond to a password reset request using the provided userId and uniqueString.
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: The ID of the user requesting password reset.
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: uniqueString
 *         description: The unique string for password reset.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Password reset response received.
 *         content:
 *           application/json:
 *             example:
 *               hashedUniqueString: 6d2b7be0-1b58-4ccf-85b2-09d6e97c1060
 *       403:
 *         description: Verification failed.
 *         content:
 *           application/json:
 *             example:
 *               message: Verification failed.
 *       404:
 *         description: Verification link expired or user not found.
 *         content:
 *           application/json:
 *             example:
 *               message: Verification link expired or user not found.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An internal server error occurred.
 */




/**
 * @swagger
 * /ResetPassword:
 *   put:
 *     tags: [Authentication]
 *     summary: Reset user password
 *     description: Reset user password using the provided hashed unique string and new password.
 *     parameters:
 *       - in: body
 *         name: resetPasswordData
 *         description: The hashed unique string and new password for password reset.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             hashedUniqueString:
 *               type: string
 *               description: The hashed unique string for password reset.
 *             new_password:
 *               type: string
 *               description: The new password for the user.
 *         example:
 *           hashedUniqueString: 6d2b7be0-1b58-4ccf-85b2-09d6e97c1060
 *           new_password: mynewsecurepassword
 *     responses:
 *       200:
 *         description: Password successfully reset.
 *         content:
 *           application/json:
 *             example:
 *               status: success
 *               message: Password changed successfully.
 *       400:
 *         description: Error occurred while resetting password.
 *         content:
 *           application/json:
 *             example:
 *               message: Error while resetting the password.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               error: An internal server error occurred.
 */