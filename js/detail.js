function $(that){
    return document.getElementsByClassName(that)[0]
}
var obj={}
var search=location.search;
 search=search.substring(1,);
  var arr1=search.split("&")
 arr1.forEach(function (item) {
     obj[item.split("=")[0]]= item.split("=")[1]
 })


    
//  $("nav-bg").innerHTML=`
//  <h1>911 GT2 RS</h1>
//  <ul>
//    <li>3,898,000 元起 * <br>制造商建议零售价（含增值税）</li>
//    <li>700 hp/515 kW <br>最大功率（hp）/最大功率（kW） </li>
//    <li> 2.8 s <br>0 - 100 km/h 加速时间 </li>
//  </ul>
// </article>
// <article class="big-bg">
//  <article class="big-bg-text">
//    <p class="big-bg-text-1"><span>首页/车型/911车型</span>/ 911 GT2 RS</p>
//    <article class="big-bg-text-2">
//      <p>911 GT2 RS <br>3,898,000 元起 * <br>制造商建议零售价（含增值税）</p>
//      <p>车型对比/购买详情</p>
//    </article>
//    <img src="img/vehicle/img3/fuwu-1.png" alt="" class=" chexing-2">
//    <article class="xingneng">
//      <article class="xingneng-img">
//        <img src="img/vehicle/img3/chexing-2.png" alt="">
//      </article>

//      <article class="xingneng-text">
//        <h4>动态性能</h4>
//        <span>Aventador S
//          Coupé不仅拥有一颗蓬勃的“心脏”，其“大脑”也相当发达：兰博基尼LDVA车辆动态主动控制单元，控制并管理车辆的任何动态特征。“兰博基尼LDS动态转向系统”与“LRS后轮随动转向系统”管理车辆后部动态性能。纵向车辆动态管理由MRS磁流变悬架及后部动态管理系统辅助完成。而车辆横向动态管理，则依托四轮驱动系统实现。兰博基尼LDVA车辆动态主动控制系统，从传感器收集车辆动态讯息，并依据实际工况将车辆动态调整为最佳状态，带来绝佳性能表现。</span>
//      </article>
//    </article>
//    <article class="neishi">
//      <article class="neishi-text">
//        <h4>内饰</h4>
//        <span>从踏入车门那一刻起，车辆属性已被定义：要做与众不同的先锋车型，一辆兼具前沿科技与超凡奢华的极致跑车。内饰精工细作，应用最为顶尖的内饰材料，展现更多可能性与多样性，例如，加入Carbon
//          Skin®等创新性材料，亦或是用碳纤维材料打造部分车身部件。经过全新设计的仪表盘、TFT液晶显示屏，让科技与优雅在Aventador S Coupé内部相得益彰，配合专属打造的全新一代照明系统，使911GT2
//          RS熠熠生辉。</span>
//      </article>
//      <article class="neishi-img">
//        <img src="img/vehicle/img3/chexing-3.png" alt="">
//      </article>
//    </article>
//    <article class="xuangua">
//      <article class="xuangua-img">
//        <img src="img/vehicle/img3/chexing-4.png" alt="">
//      </article>

//      <article class="xuangua-text">
//        <h4>推杆悬挂</h4>
//        <span>新型Aventador S
//          Coupé应用极其先进的磁流变悬挂技术、推杆弹簧及减震器设计，可根据道路状况和所选驾驶模式的不同调校悬架。除了弥补侧倾和车身移动外，该系统还专门设计用于与后轮随动转向系统协同工作，确保在任何行驶条件下均能快速准确的反应。</span>
//      </article>
//    </article>

//  </article>
//  <article class="foot-bg">
//    <img src="img/vehicle/img3/chexing-5.png">
//  </article>
// </article>
// <article class="jianjie">
//  <article class="waiguan">
//    <article>
//      <h4>外观设计 </h4>
//      <div id="" style="width: 0;height: 95px;float: right;">

//      </div>
//      <img src="img/vehicle/img3/chexing-6.png">
//      <p>兰博基尼Urus具有最前沿的独特流线设计和兼容并包的态度，融汇了运动性、优雅感以及越野雄心。
//        其坚固的表面传达着刚劲和自信的态度，而混合轮胎则彰显超级豪华跑车的风格。每一处外观设计都为实现功能性而服务。兰博基尼的部分细节和标志性设计元素清晰可见，比如"Y"型和六角形元素、带有中央凸起的前引擎盖以及后侧车门的交叉线条。令人惊叹的比例和与众不同的轮廓使Urus成为名副其实的兰博基尼。另外，在设计比例方面该车也是同类别之中车身最低的SUV。
//        Urus的设计灵感兰源于LM002，显现引擎位置的引擎盖设计和对标志性对角线条的运用都体现着这个传统，而无缝车门则让人无法不联想到Marcello Gandini的线条风格。</p>

//    </article>

//  </article>
//  <article class="jianjie-img">


//  </article>
//  <article class="neishi2">
//    <article>
//      <h4>内饰</h4>
//      <div id="" style="width: 0;height: 95px;float: left;">

//      </div>
//      <img src="img/vehicle/img3/chexing-7.png">
//      <p>兰博基尼Urus的内饰代表着意大利尊贵工艺与尖端技术的融合。航空设计理念和以驾驶者为中心的设备概念均通过三重TFT显示屏（分别用于仪表板、娱乐信息以及带有手写辨识虚拟键盘的舒适调节功能）得到了体现，将驾驶者的需求放在了首位，并使驾驭体验更加愉悦、充满享受。仪表盘的结构延续了兰博基尼代表性车型所传承的"Y"型风格。通过对天然皮革、Alcantara®（欧缔兰）、木材、铝或碳等材质间的不同颜色和材质的选配，可按照需求为车辆内饰带来更为优雅或更具活力的效果。在其中一些材质上还可以采用考究的对比缝线或Q-citura缝线。在至今所有的兰博基尼之中，Urus配备有最为全面的可选配置，让多样化的风格汇集在一款绝无仅有的车型之中。不仅如此，兰博基尼Urus也是首辆5人位超级跑车。</p>

//    </article>

//  </article>
// `