// 来源自第三方
class UserDao {
  saveUser(name, age, salary) {
    console.log('保存数据' + name + ':' + age + ':' + salary)
  }
}

// 本地
class UserDaoAdapter extends UserDao {
  save({ age, name, salary }) {
    super.saveUser(name, age, salary)
  }
}