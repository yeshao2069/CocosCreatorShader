/*
 * @Author: your name
 * @Date: 2022-02-23 23:03:01
 * @LastEditTime: 2022-03-04 19:08:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \EasyNav2\assets\Scripts\Navimesh\NavMeshAgent.ts
 */

import { _decorator, Component, Node, Vec3, SkeletalAnimationComponent } from 'cc';
import { NavLineComp } from './NavLineComp';
const { ccclass, property } = _decorator;

const idle = "idle"
const run = "run"
const dance = "dance"
const desPos = new Vec3;
const tempV1 = new Vec3(0, 0, 0);
const tempV2 = new Vec3(0, 0, 0);
const tempV3 = new Vec3(0, 0, 0);

@ccclass('AgentComp')
export class AgentComp extends Component {

	@property({ displayName: "移动速度", tooltip: "控制靓仔移动的速度", min: 0.1 })
	private speed = 1;
	@property({ type: NavLineComp, displayName: "导航线组件", tooltip: "拖入导航线组件", min: 0.1 })
	private lineComp: NavLineComp = null;
	@property(SkeletalAnimationComponent)
	private anm: SkeletalAnimationComponent = null;
	private currAnm: string = null;

	private move = false;

	onEnable() {
		this.currAnm = null;
		this.playLoopAnm(idle);
	}

	/**
	 * @Date: 2022-03-04 17:28:20
	 * @LastEditors: iwae
	 * @description: 播放循环动画
	 * @param {string} name
	 */
	playLoopAnm(name: string) {
		if (this.currAnm == name) return
		this.anm.crossFade(name,0.3);
		this.currAnm = name;
	}

	/**
	 * @Date: 2022-03-04 17:27:47
	 * @LastEditors: iwae
	 * @description: 初始化靓仔和导航线，穿目的地v3
	 * @param {Vec3} destination
	 */
	initAgent(destination: Vec3) {
		this.move = true;
		desPos.set(destination);
		this.lineComp.init(desPos)/* 初始化导航线 */
		this.rotateRole(desPos)

	}

	stopAgent() {
		this.lineComp.stop();
		this.move = false;
		this.playLoopAnm(Math.random()>0.3?dance:idle);
	}

	update(dt) {
		if (this.move) {
			this.playLoopAnm(run);
			tempV1.set(this.node.position)
			if (this.MoveTowards(tempV2, tempV1, desPos, dt * this.speed)) this.stopAgent()
			this.node.setPosition(tempV2)
		}
	}


	/**
	 * @Date: 2022-03-04 17:26:53
	 * @LastEditors: iwae
	 * @description: 
	 * @param {any} pos 朝向
	 */
	rotateRole(pos: any) {
		//角色转动的角度,相对Z轴，逆时针为正方向
		tempV3.y = (Math.atan2(pos.x - this.node.position.x, pos.z - this.node.position.z) * (180 / Math.PI)) % 360;
		this.node.setRotationFromEuler(tempV3);
	}

	/**
	 * @Date: 2022-03-04 17:26:21
	 * @LastEditors: iwae
	 * @description: unity vector组件移植
	 * @param {Vec3} out 返回坐标
	 * @param {Vec3} current 当前坐标
	 * @param {Vec3} target 目标点坐标
	 * @param {number} maxDistanceDelta 速度
	 */
	MoveTowards(out: Vec3, current: Vec3, target: Vec3, maxDistanceDelta: number) {
		// avoid vector ops because current scripting backends are terrible at inlining
		const toVector_x = target.x - current.x;
		const toVector_y = target.y - current.y;
		const toVector_z = target.z - current.z;
		const sqdist = toVector_x * toVector_x + toVector_y * toVector_y + toVector_z * toVector_z;
		if (sqdist == 0 || (maxDistanceDelta >= 0 && sqdist <= maxDistanceDelta * maxDistanceDelta)) {
			out.set(target);
			return true;
		}
		const dist = Math.sqrt(sqdist);
		out.set(current.x + toVector_x / dist * maxDistanceDelta,
			current.y + toVector_y / dist * maxDistanceDelta,
			current.z + toVector_z / dist * maxDistanceDelta)
		return false;
	}


}

