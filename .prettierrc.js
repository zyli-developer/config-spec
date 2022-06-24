/**
 * @Description: `commitlint`-检测提交信息 配置文件
 */

 module.exports = {
	// 单行字符数限制
	printWidth: 80,
	// Tab 空格数
	tabWidth: 2,
	// 是否使用Tab进行缩进
	useTabs: true,
	// 语句末尾是否打印分号
	semi: false,
	// 使用单引号
	singleQuote: true,
	// 更改引用对象属性的时间
	// 可选值 <as-needed|consistent|preserve>
	quoteProps: 'as-needed',
	// 在JSX中使用单引号而不是双引号
	jsxSingleQuote: false,
	// 多行时尽可能打印尾随逗号
	// （例如，单行数组永远不会出现逗号结尾。）
	// 可选值 <none|es5|all> 默认none
	trailingComma: 'all',
	// 在对象文字中的括号之间打印空格
	bracketSpacing: true,
	// jsx 标签的反尖括号是否需要换行
	jsxBracketSameLine: false,
	// 在单独的箭头函数参数周围包括括号
	// eg: always：(x) => x \ avoid：x => x
	arrowParens: 'avoid',
	// 格式化以给定字符偏移量（包括和不包括）开始和结束的代码
	rangeStart: 0,
	rangeEnd: Infinity,
	// 指定要使用的解析器，可忽略'@prettier'前缀
	requirePragma: false,
	// 不需要自动在文件开头插入 @prettier
	insertPragma: false,
	// 使用默认的折行标准 always\never\preserve
	proseWrap: 'preserve',
	// 指定HTML文件的全局空格敏感度 css\strict\ignore
	htmlWhitespaceSensitivity: 'strict',
	// Vue文件脚本和样式标签缩进
	vueIndentScriptAndStyle: true,
	// 换行符使用 lf 结尾 可选值'<auto|lf|crlf|cr>'
	endOfLine: 'lf',
}
