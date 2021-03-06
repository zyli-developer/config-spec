module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'@vue/typescript/recommended'
		/*
		 * 'eslint:recommended',
		 * 'plugin:vue/vue3-strongly-recommended',
		 * '@vue/typescript/recommended',
		 */
	],
	globals: {
		'history': false,
		'location': false,
		'process': false,
		'window': false,
		'wx': false
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 2020,
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: [
		'vue',
		'@typescript-eslint'
	],
	root: true,
	rules: {
		'@typescript-eslint/ban-types': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none'
				},
				singleline: {
					delimiter: 'comma'
				}
			}
		],
		'@typescript-eslint/no-explicit-any': 1, // 允许any类型
		'@typescript-eslint/no-non-null-assertion': 0, // 允许断言语法 !.
		'@typescript-eslint/no-this-alias': [
			'error',
			{
				allowDestructuring: true, // Allow `const { props, state } = this`; false by default
				allowedNames: [
					'self',
					'_this',
					'that'
				] // Allow `const self = this`; `[]` by default
			}
		],

		'@typescript-eslint/no-var-requires': 2,
		'linebreak-style': [
			'off',
			'windows'
		], // 换行风格
		/*
		 * 'no-useless-escape': 0,
		 * 'no-sparse-arrays': 0,
		 * 'no-prototype-builtins': 0,
		 * 'no-use-before-define': 0,
		 * 'no-restricted-globals': 0,
		 * 'no-restricted-syntax': 0,
		 * 'no-multiple-template-root': 0,
		 * 'no-v-model-argument': 0,
		 * 'no-case-declarations': 0,
		 */
		'no-alert':  process.env.NODE_ENV === 'production' ?
			'error' :
			'off',
		'no-array-constructor': 'warn', // 禁止使用数组构造器
		'no-bitwise': 0, // 禁止使用按位运算符
		'no-caller': 'warn', // 禁止使用arguments.caller或arguments.callee
		'no-catch-shadow': 2, // 禁止catch子句参数与外部作用域变量同名
		'no-class-assign': 2, // 禁止给类赋值
		'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
		'no-console': process.env.NODE_ENV === 'production' ?
			'warn' :
			'off',
		'no-const-assign': 2, // 禁止修改const声明的变量
		'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if('warn')
		'no-continue': 0, // 禁止使用continue
		'no-control-regex': 2, // 禁止在正则表达式中使用控制字符
		'no-debugger': process.env.NODE_ENV === 'production' ?
			'warn' :
			'off',
		'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
		'no-div-regex': 'warn', // 不能使用看起来像除法的正则表达式/=foo/
		'no-dupe-args': 2, // 函数参数不能重复
		'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:'warn',a:'warn'}
		'no-duplicate-case': 2, // Switch中的case标签不能重复
		'no-else-return': 0, // 如果if语句里面有return,后面不能跟else语句
		'no-empty': 2, // 块语句中的内容不能为空
		'no-empty-character-class': 2, // 正则表达式中的[]内容不能为空
		'no-eq-null': 2, // 是否禁止对null使用 == 或 != 运算符
		'no-eval': 2, // 禁止使用eval
		'no-ex-assign': 2, // 禁止给catch语句中的异常参数赋值
		'no-extend-native': 2, // 禁止扩展native对象
		'no-extra-bind': 2, // 禁止不必要的函数绑定
		'no-extra-boolean-cast': 2, // 禁止不必要的bool转换
		'no-extra-parens': 0, // 禁止非必要的括号
		'no-extra-semi': 2, // 禁止多余的冒号
		'no-fallthrough': 'warn', // 禁止switch穿透
		'no-floating-decimal': 2, // 禁止省略浮点数中的0 .5 3.
		'no-func-assign': 2, // 禁止重复的函数声明
		'no-implicit-coercion': 'warn', // 禁止隐式转换
		'no-implied-eval': 2, // 禁止使用隐式eval
		'no-inline-comments': 0, // 禁止行内备注
		// 禁止在块语句中使用声明（变量或函数
		'no-inner-declarations': [
			'error',
			'functions'
		],
		// 禁止无效的正则表达式
		'no-invalid-regexp': 2,
		'no-invalid-this': 2, // 禁止无效的this，只能用在构造器，类，对象字面量
		'no-irregular-whitespace': 2, // 不能有不规则的空格
		'no-iterator': 2, // 禁止使用__iterator__ 属性
		'no-label-var': 2, // Label名不能与var声明的变量名相同
		'no-labels': 2, // 禁止标签声明
		'no-lone-blocks': 2, // 禁止不必要的嵌套块
		'no-lonely-if': 0, // 禁止else语句内只有if语句
		'no-loop-func': 0, // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
		'no-mixed-requires': [
			'off',
			false
		], // 声明时不能混用声明类型
		'no-mixed-spaces-and-tabs': [
			'off',
			false
		], // 禁止混用tab和空格
		'no-multi-spaces': 'error', // 不能用多余的空格
		'no-multiple-empty-lines': [
			'error',
			{'max': 2}
		], // 空行最多不能超过2行
		'no-tabs': 0,

		// 'no-multi-str': 2, // 字符串不能用\换行

		'no-native-reassign': 2, // 不能重写native对象
		'no-negated-in-lhs': 2, // In 操作符的左边不能有!
		'no-nested-ternary': 0, // 禁止使用嵌套的三目运算
		'no-new': 'warn', // 禁止在使用new构造一个实例后不赋值
		'no-new-func': 'warn', // 禁止使用new Function
		'no-new-object': 2, // 禁止使用new Object()
		'no-new-require': 2, // 禁止使用new require
		'no-new-wrappers': 2, // 禁止使用new创建包装实例，new String new Boolean new Number
		'no-obj-calls': 2, // 不能调用内置的全局对象，比如Math() JSON()
		'no-octal': 2, // 禁止使用八进制数字
		'no-octal-escape': 2, // 禁止使用八进制转义序列
		'no-param-reassign': 2, // 禁止给参数重新赋值
		'no-path-concat': 0, // Node中不能使用__dirname或__filename做路径拼接
		'no-plusplus': 0, // 禁止使用++，--
		'no-process-env': 0, // 禁止使用process.env
		'no-process-exit': 0, // 禁止使用process.exit()
		'no-proto': 2, // 禁止使用__proto__属性
		'no-redeclare': 2, // 禁止重复声明变量
		'no-regex-spaces': 2, // 禁止在正则表达式字面量中使用多个空格 /foo bar/
		'no-restricted-modules': 0, // 如果禁用了指定模块，使用就会报错
		'no-return-assign': 'warn', // Return 语句中不能有赋值表达式
		'no-script-url': 0, // 禁止使用javascript:void(0)
		'no-self-compare': 2, // 不能比较自身
		'no-sequences': 2, // 禁止使用逗号运算符
		'no-shadow': 2, // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
		'no-shadow-restricted-names': 2, // 严格模式中规定的限制标识符不能作为声明时的变量名使用
		'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
		'no-sparse-arrays': 2, // 禁止稀疏数组， ['warn',,2]
		'no-sync': 0, // Nodejs 禁止同步方法
		'no-ternary': 0, // 禁止使用三目运算符
		'no-this-before-super': 2, // 在调用super()之前不能使用this或super
		'no-throw-literal': 2, // 禁止抛出字面量错误 throw 2;
		'no-trailing-spaces': 2, // 一行结束后面不要有空格
		'no-undef': 1, // 不能有未定义的变量
		'no-undef-init': 0, // 变量初始化时不能直接给它赋值为undefined
		'no-undefined': 0, // 不能使用undefined
		'no-underscore-dangle': 0, // 标识符不能以_开头或结尾
		'no-unexpected-multiline': 2, // 避免多行表达式
		'no-unneeded-ternary': 2, // 禁止不必要的嵌套 var isYes = answer === 'warn' ? true : false;
		'no-unreachable': 2, // 不能有无法执行的代码
		'no-unused-expressions': 2, // 禁止无用的表达式
		'no-unused-vars': [
			'error',
			{
				'args': 'none',
				'argsIgnorePattern': '^_',
				'ignoreRestSiblings': false ,
				'vars': 'all'
			}
		], // 不能有声明后未被使用的变量，参数不检查
		'no-use-before-define': 0, // 未定义前不能使用
		'no-useless-call': 2, // 禁止不必要的call和apply
		'no-void': 0, // 禁用void操作符
		'no-var': 2, // 禁用var，用let和const代替
		'no-warning-comments': [
			'off',
			{
				'terms': [
					'todo',
					'fixme',
					'xxx'
				],
				'location': 'start'
			}
		], // 不能有警告备注
		'no-with': 2, // 禁用with
		'array-bracket-spacing': [
			'error',
			'never'
		], // 是否允许非空数组里面有多余的空格
		'arrow-parens': 0, // 箭头函数用小括号括起来
		'arrow-spacing': 0, // =>的前/后括号
		'accessor-pairs': 0, // 在对象中使用getter/setter
		'block-scoped-var': 2, // 块语句中使用var
		'brace-style': [
			'warn',
			'1tbs'
		], // 大括号风格
		'callback-return': 'warn', // 避免多次调用回调什么的
		'camelcase': ['error',
			{
				'properties': 'never',
				ignoreDestructuring: true,
				ignoreImports: true
			}
		], // 强制驼峰法命名
		'comma-dangle': [
			0,
			'never'
		], // 对象字面量项尾能否有逗号
		'comma-spacing': 0, // 逗号前后的空格
		'comma-style': [
			2,
			'last'
		], // 逗号风格，换行时在行首还是行尾
		'complexity': [
			0,
			11
		], // 循环复杂度
		'computed-property-spacing': [
			0,
			'never'
		], // 是否允许计算后的键名什么的
		'consistent-return': 0, // Return 后面是否允许省略
		'consistent-this': [
			2,
			'that'
		], // This别名
		'constructor-super': 0, // 非派生类不能调用super，派生类必须调用super
		'curly': 0, // 必须使用 if(){} 中的{}
		'default-case': 2, // Switch语句最后必须有default
		'dot-location': ['error', 'property'], // 对象访问符的位置，换行的时候在行首还是行尾
		'dot-notation': [
			0,
			{
				'allowKeywords': true
			}
		], // 避免不必要的方括号
		'eol-last': 2, // 文件以单一的换行符结束
		'eqeqeq': 2, // 必须使用全等
		'func-names': 0, // 函数表达式必须有名字
		'func-style': [
			0,
			'declaration'
		], // 函数风格，规定只能使用函数声明/函数表达式
		'generator-star-spacing': 0, // 生成器函数*的前后空格
		'guard-for-in': 0, // For in循环要用if语句过滤
		'handle-callback-err': 0, // Nodejs 处理错误
		'id-length': 0, // 变量名长度
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		], // 缩进风格
		'init-declarations': 0, // 声明时必须赋初值
		'key-spacing': [
			0,
			{ 'beforeColon': false,
				'afterColon': true }
		], // 对象字面量中冒号的前后空格
		'lines-between-class-members': 0,
		'lines-around-comment': 0, // 行前/行后备注
		'max-depth': [
			0,
			4
		], // 嵌套块深度
		'max-len': [
			0,
			80,
			4
		], // 字符串最大长度
		'max-nested-callbacks': [
			0,
			1
		], // 回调嵌套深度
		'max-params': [
			0,
			3
		], // 函数最多只能有3个参数
		'max-statements': [
			0,
			10
		], // 函数内最多有几个声明
		'new-cap': 0, // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
		'new-parens': 2, // New时必须加小括号
		'newline-after-var': 0, // 变量声明后是否需要空一行
		'object-curly-spacing': [
			0,
			'never'
		], // 大括号内是否允许不必要的空格
		'object-shorthand': 2, // 强制对象字面量缩写语法 const o = { a: 1, run: () => {} } => const o = { a: 1, run() {} }
		'operator-assignment': [
			0,
			'always'
		], // 赋值运算符 += -=什么的
		'operator-linebreak': [
			2,
			'after'
		], // 换行时运算符在行尾还是行首
		'padded-blocks': 0, // 块语句内行首行尾是否要空行
		'prefer-const': 2, // 首选const
		'prefer-spread': 0, // 首选展开运算
		'prefer-reflect': 2, // 首选Reflect的方法
		'quotes': [
			'error',
			'single'
		], // 引号类型 `` ''
		'quote-props':[
			0,
			'always'
		], // 对象字面量中的属性名是否强制双引号
		'radix': 2, // ParseInt必须指定第二个参数
		'id-match': 1, // 命名检测
		'require-yield': 2, // 生成器函数必须有yield
		'semi': [
			'error',
			'never'
		], // 语句强制分号结尾
		'sort-vars': 0, // 变量声明时是否排序
		'sort-keys': 0, // 对象属性声明时是否排序
		'keyword-spacing': 2, // 关键字后面是否要空一格
		'space-before-blocks': [
			'error',
			'always'
		], // 不以新行开始的块 { 前面要不要有空格
		'space-before-function-paren': [
			'error',
			{
				'anonymous': 'always',
				'named': 'never',
				'asyncArrow': 'always'
			}
		], // 函数定义时括号前面要不要有空格
		'space-in-parens': [
			'off',
			'never'
		], // 小括号里面要不要有空格
		'space-infix-ops': 2, // 中缀操作符周围要不要有空格
		// 'space-return-throw-case': 2, // Return throw case后面要不要加空格
		'space-unary-ops': [
			2,
			{ 'words': true,
				'nonwords': false }
		], // 一元运算符的前/后要不要加空格
		'spaced-comment': 2, // 注释风格要不要有空格什么的
		'strict': 2, // 使用严格模式
		'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN()
		'valid-jsdoc': 0, // Jsdoc规则
		'valid-typeof': 2, // 必须使用合法的typeof的值
		'vars-on-top': 2, // Var必须放在作用域顶部
		'wrap-iife': [
			2,
			'inside'
		], // 立即执行函数表达式的小括号风格
		'wrap-regex': 0, // 正则表达式字面量用小括号包起来
		'vue/attribute-hyphenation': 2, // 属性名称格式
		'vue/custom-event-name-casing': 2, // 自定义事件名称格式
		'vue/array-bracket-spacing': 2, // 数组括号间距
		'vue/arrow-spacing': 2, // 箭头间距
		'vue/block-spacing': 0, // template 标签强制换行
		'vue/brace-style': 2, // 大括号是否单独一行
		'vue/camelcase': 2,
		'vue/comma-dangle': 2, // 不允许在 <template> 中使用尾随逗号
		'vue/component-name-in-template-casing': 2, // dom组件名称格式
		'vue/eqeqeq': 2, // 全等
		'vue/key-spacing': [
			'error',
			{
				'afterColon': true
			}
		], // 符号间距
		'vue/match-component-file-name': 2, // 组件文件名检验
		'vue/object-curly-spacing': 2, // 对象间距
		'vue/attributes-order': 0, // 属性顺序
		'vue/one-component-per-file': 0, // 一个文件只允许一个组件
		'vue/html-closing-bracket-newline': [
			'error', {
				'singleline': 'never',
				'multiline': 'always'
			}
		], // html关闭括号换行
		'vue/max-attributes-per-line': [
			'error',
			{
				'singleline': {
					'max': 3
				}
			}
		], // 多个属性换行
		'vue/multiline-html-element-content-newline': 0, // 多行htm元素内容换行
		'vue/singleline-html-element-content-newline': 0, // 单行htm元素内容换行
		'vue/html-self-closing': 2, // 没有子元素的标签自闭和
		'vue/require-default-prop': 2, // props必须设置默认值
		'vue/no-v-model-argument': 0,
		'vue/no-arrow-functions-in-watch': 0,
		'vue/no-template-key': 0, // Template标签添加key, vue3支持该写法
		'vue/no-v-html': 1, // 不推荐使用v-html指令
		'vue/comment-directive': 0,
		'vue/no-parsing-error': 2, // 模板无法正确编译错误
		'vue/no-deprecated-v-on-native-modifier': 0, // v-on 使用 .native修饰符
		'vue/multi-word-component-names': 2 ,// 组件名强制多个单词
		'vue/no-multiple-template-root': 0, // vue2.x
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
}
