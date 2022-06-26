// 轴节点基础数据类型
interface IAxisBase {
	id: string
	text_index: number
	is_placeholder?: boolean
}

// 轴节点共有数据类型
interface IAxisCommon extends IAxisBase {
	axis_type?: TAxisType | string // optional 的原因是在单独的 inserter 中确定，不需要外部传入
	user_type: string
}

// widget
interface IAxisWidget extends IAxisCommon {
	prev_id: string | null
	html: string
	is_close: boolean
	td_active: boolean
	is_active: boolean
}

interface IAxisContent extends IAxisCommon {
	text_content: string // 汉字或英文单词
	duration: number // 用于记录停顿时长（秒）
	html: string
	// delay_start?: boolean
	// delay_end?: boolean
}

interface IAxisUe4event extends IAxisCommon {
	prev_id: string | null
	action_type: string
	duration: number
	end_index: number
	html: string
	td_active: boolean
	is_active: boolean
	is_error: boolean
}

// 动作
interface IAxisAction extends IAxisUe4event {
	drag_type: string
	is_micro: boolean
}

// 表情
interface IAxisExp extends IAxisUe4event {
	drag_type: string
	is_micro: boolean
}

// 镜头
interface IAxisCamera extends IAxisUe4event {
	drag_type: string
}

type IAxisUe4 = IAxisAction | IAxisExp | IAxisCamera

// 场景配图
interface IAxisBackground extends IAxisCommon {
	prev_id: string | null
	action_type: string
	html: string
	td_active: boolean
	is_active: boolean
}

// 背景音乐
interface IAxisAudio extends IAxisCommon {
	action_type: string
	user_type: 'user_audio' | 'user_audio_close' | string
	html: string
	duration: TNumberLike
	end_index: number
	td_active: boolean
	is_active: boolean
	is_close: boolean
	is_error: boolean
}

type IAxisItem =
	| IAxisContent
	| IAxisAction
	| IAxisWidget
	| IAxisExp
	| IAxisCamera
	| IAxisBackground
	| IAxisAudio
