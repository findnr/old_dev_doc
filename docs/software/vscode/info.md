<!--
 * @Author: your name
 * @Date: 2022-03-14 20:54:05
 * @LastEditTime: 2022-06-16 16:02:41
 * @LastEditors: 程英明
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \doc-man\docs\software\vscode\info.md
-->
### php代码生成
```json
{
	"service-construct": {
		"prefix": "cphp",
		"body": [
			"<?php \r\n",
			"declare(strict_types=1);\r\n",
			"namespace ${TM_DIRECTORY/.*app/app/};\n",
			"class $TM_FILENAME_BASE",
			"{",
			"\tpublic function __construct()",
			"\t{\n",
			"\t}",
			"\tpublic function index()",
			"\t{\n",
			"\t}",
			"}"
		],
		"description": "generate service class"
	},
}
```
### vue3代码生成
```json
{
	"Print to console": {
		"prefix": "vue3",
		"body": [
			"<template>",
			"  <div class='index'>\n",
			"  </div>",
			"</template>\n",
			"<script setup>",
			"</script>\n",
			"<style scoped lang=\"${1:scss}\">\n",
			".index{}\n",
			"</style>\n",
		],
		"description": "Create vue template"
	}
}

```
### vue2代码生成
```json
{
	"Print to console": {
		"prefix": "vue2",
		"body": [
			"<template>",
			"  <div class='index'>\n",
			"  </div>",
			"</template>\n",
			"<script>",
			"export default {",
			"  props:[], \n",
			"  components: {\n",
			"  },",
			"  data() {",
			"    return {\n",
			"    };",
			"  },",
			"  computed: {\n",
			"  },",
			"  watch: {\n",
			"  },",
			"  created() {\n",
			"  },",
			"  mounted() {\n",
			"  },",
			"  methods: {\n",
			"  },",
			"};",
			"</script>\n",
			"<style scoped lang=\"${1:scss}\">\n",
			"</style>\n",
		],
		"description": "Create vue template"
	}
}
```