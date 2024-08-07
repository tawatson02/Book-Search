const { User } = require('../models/User');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users : async () => {
      return User.find();
    },

    user: async (parent, { _id, username }) => {
        const params = _id ? {_id} : {username};
      return User.findOne({ params});
    },

    me: async (parent, args, context) => {
        if (context.user) {
            return User.findOne({_id: context.user._id});
        }
        throw new AuthenticationError('You need to be logged in');
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, {username, email, password }) => {
      const user = await User.findOne({ $or: [{username}, {email}] });

      if (!user) {
        throw AuthenticationError(`Can't find this user`);
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError('Wrong password');
      }

      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { bookInput }, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                {_id: context.user._id},
                {$addToSet: {savedBooks: bookInput}},
                {new: true, runValidators: true}
            );
            return updatedUser;
        }
            throw new AuthenticationError('You need to be logged in')
      
    },
    
    deleteBook: async (parent, { bookId}, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: {bookId} } },
                { new: true }
            );
            return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in');
    },
  },
};

module.exports = resolvers;
