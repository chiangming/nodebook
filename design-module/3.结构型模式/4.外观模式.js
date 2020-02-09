/** 外观模式
 *  通过统一的管理类对内部类管理，同时暴露接口接收来自外部类的消息
 */

// 场景描述： 需求人员提出需求，开发人员进行开发，测试人员进行测试
// 需求人员不需要通知开发人员去开发，测试人员去测试
// 只需要告诉小组组长这个需求就可以了

// 开发人员，负责开发需求
function Developter() {
  this.develop = function(demand_name) {
    console.log("开发人员开发需求：" + demand_name);
  }
}

// 测试人员，负责测试需求
function Tester() {
  this.test = function(demand_name) {
    console.log("测试人员测试需求：" + demand_name);
  }
}

// 技术部组长，负责安排开发人员开发和测试人员测试
function Leader() {
  var developer = new Developter();
  var tester = new Tester();
  this.processDemand = function(demand_name) {
    developer.develop(demand_name);
    tester.test(demand_name);
  }
}

// 需求人员，提出需求
function Demander() {
  var leader = new Leader();
  this.demand = function(demand_name) {
    console.log("提出需求：" + demand_name);
    leader.processDemand(demand_name);
  }
}

// 测试
var demand_name = "开发一款MOBA游戏.";
var demander = new Demander();
demander.demand(demand_name);