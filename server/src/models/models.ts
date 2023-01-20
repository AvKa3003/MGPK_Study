import { DataTypes, UUIDV4 } from 'sequelize'
import { sequelize } from './../db.js'

// const User = sequelize.define('user', {
//   id: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true },
//   email: { type: DataTypes.STRING, unique: true, allowNull: false },
//   username: { type: DataTypes.STRING, unique: true, allowNull: false },
//   passwordHash: { type: DataTypes.STRING, allowNull: false },
// })

// const Token = sequelize.define('token', {
//   id: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true },
//   refreshToken: { type: DataTypes.STRING, allowNull: false },
// })

// type RoleAttributes = {
//   roleName: string
// }

// class Role extends Model<RoleAttributes> {
//   declare roleName: string
// }

// await Role.create

const Role = sequelize.define('role', {
  id: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true },
  roleName: { type: DataTypes.STRING, allowNull: false },
})

// interface RoleAttributes {
//   id: string
//   roleName: string
// }

// interface RoleOutput extends Required<RoleAttributes> {}

// class Role extends Model<RoleAttributes> implements RoleAttributes {
//   public id!: string
//   public roleName!: string
// }

// Role.init(
//   {
//     id: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true },
//     roleName: { type: DataTypes.STRING, allowNull: false },
//   },
//   {
//     sequelize: sequelize,
//   },
// )

// const UserMeta = sequelize.define('userMeta', {
//   id: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true },
//   key: { type: DataTypes.STRING, allowNull: false },
//   value: { type: DataTypes.STRING, allowNull: false },
// })

// const RegistrationKey = sequelize.define('user', {
//   id: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true },
//   key: { type: DataTypes.STRING, allowNull: false },
//   createdAt: { type: DataTypes.DATE, allowNull: false },
//   explainAt: { type: DataTypes.DATE, allowNull: false },
// })

// const Group = sequelize.define('userMeta', {
//   id: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true },
//   title: { type: DataTypes.STRING, allowNull: false },
// })

// const Attachment = sequelize.define('userMeta', {
//   id: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true },
//   fileName: { type: DataTypes.STRING, allowNull: false },
// })

// const Subject = sequelize.define('userMeta', {
//   id: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true },
//   title: { type: DataTypes.STRING, allowNull: false },
// })

// const SubjectGroup = sequelize.define('userMeta', {
//   id: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true },
//   title: { type: DataTypes.STRING, allowNull: false },
// })

// const SubjectUser = sequelize.define('userMeta', {
//   id: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true },
// })

// Role.hasMany(User)
// User.belongsTo(Role)

export {
  // User,
  Role,
  // RoleAttributes,
  // RoleOutput,
  // RegistrationKey,
  // Group,
  // UserMeta,
  // Subject,
  // Attachment,
  // SubjectGroup,
  // SubjectUser,
  // Token,
}
