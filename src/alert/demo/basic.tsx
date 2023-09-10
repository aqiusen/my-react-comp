import React from 'react';
// 这里需要在tsconfig中配置：
// "paths": {
//     "happy-ui": ["src/index.ts"],
//         "@@/*": [".dumi/tmp/*"]
// },
//否则dumi会显示源代码，而不是示例代码
import {Alert} from 'happy-ui';
export default () => <Alert kind="warning">这是一条警告提示</Alert>;