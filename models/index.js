const { Sequelize, DataTypes } = require('sequelize')
const config = require('../config/config.json')
// const sequelize = new Sequelize('sqlite::memory:')
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
})

const Tests = sequelize.define('Tests',
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true,
  }
)



const Questions = sequelize.define('Questions',
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Title: {
      type: DataTypes.TEXT
    },
    Image: {
      type: DataTypes.STRING
    },
    Answer: {
      type: DataTypes.STRING
    }
  }
)

Tests.hasMany(Questions)
Questions.belongsTo(Tests)

const Options = sequelize.define("Options", {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Option: {
    type: DataTypes.STRING
  }
})

Questions.hasOne(Options)
Options.belongsTo(Questions, {
})

const Users = sequelize.define('Users', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: {
    type: DataTypes.STRING,
  }
})

const Results = sequelize.define('Results', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Check: {
    type: DataTypes.BOOLEAN
  }
})

Users.hasMany(Results)
Results.belongsTo(Users)

Tests.hasMany(Results)
Results.belongsTo(Tests)

Questions.hasMany(Results)
Results.belongsTo(Questions)

Options.hasMany(Results)
Results.belongsTo(Options)

// sequelize.sync()

module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  Tests: Tests,
  Questions: Questions,
  Options: Options,
  Users: Users,
  Results: Results
}