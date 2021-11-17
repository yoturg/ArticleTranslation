'use strict';

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * 今天我们要一起写一个编译器。 但不是别的什么编译器... 
 * 是一个非常小的编译器! 一个沾到如果你删除所有注释，文件大小只有大约200行实际代码的编译器
 *
 * 我们将把一些类似 lisp 的函数调用编译成一些类似 C 的函数调用
 *
 * 如果您不熟悉二者中的任意一个。 我将为你快速介绍一下
 *
 * 如果我们有两个函数 `add` 和 `subtract`，它们会写成这样:
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * 简简单单对吧，
 *
 * 很好，因为这正是我们要编译的内容。 虽然这既不是完整的 LISP 语法，
 * 也不是完整的 C 语法，但它的语法足以演示现代编译器的许多主要部分。
 */

/**
 * 大多数编译器分为三个主要阶段：解析(Parsing)、转换(Transformation)和代码生成(Code Generation)
 *
 * 1. *解析* 是将原始代码转化为更抽象的代码的表示。
 *
 * 2. *转换* 采用和操作这些抽象的代码表示，来完成编译器想要他完成的任何事情。
 *
 * 3. *代码生成* 采用转换后的代码表示并将其转换为新代码。
 */

/**
 * 解析(Parsing)
 * -------
 *
 * 解析通常分为两个阶段: 词法分析(Lexical Analysis)和句法分析(Syntactic Analysis).
 *
 * 1. *词法分析* 获取原始代码并通过分词器（或词法分析器）将其拆分为称为tokens（结构体？）的东西。
 *
 *    tokens 是一个描述独立语法片断的对象组成的数据。 这些片断可以是数字、标签、标点符号、运算符等.
 *
 * 2. *句法分析* 采用tokens并将他们重新格式化成描述语法的每个部分以及该部分和其他部分关系的表示。这被称为中间表示或抽象语法树。
 *
 *    抽象语法树，简称 AST，是一个深度嵌套的对象，他用同时兼顾易于使用和传递很多信息的方式表示代码
 *
 * 对于以下语法:
 *
 *   (add 2 (subtract 4 2))
 *
 * tokens可能看起来是这样的:
 *
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * 抽象语法树可能看起来是这样的:
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 */

/**
 * 转换(Transformation)
 * --------------
 *
 * 编译器的下一个阶段是转换(Transformation)。同样，这也是从最后一步获取 AST 并对其进行更改。 
 * 它可以用相同的语言操作 AST，也可以将AST翻译成一种全新的语言。
 *
 * 让我们看看如何转换AST。
 *
 * 您可能会注意到我们的 AST 中包含看起来非常相似的元素。都是这些具有类型属性的对象。
 * 每一个对象都被称为AST结点。 这些结点上定义了描述他做为树的一个独立部分的属性。

 *
 * 我们可以写一个"NumberLiteral(数字)"结点
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * 或者写一个"CallExpression(调用表达式)"结点
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...嵌套节点到这里...],
 *   }
 *
 * 在转换 AST 时，我们可以通过添加/删除/替换属性来操作节点，可以添加新节点、删除节点，
 * 或者单独保留现有的 AST 并基于它创建一个全新的。
 *
 * 由于我们的目标是一种新语言，所以我们会专注于创建特定于目标语言的全新 AST。
 *
 * 遍历( Traversal )
 * ---------
 *
 * 为了浏览所有这些节点，我们需要能够遍历它们。 在这个过程中会对每个AST结点进行深度优先遍历
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * 对于上面的AST我们会这样做:
 *
 *   1. 程序 - 从AST的顶层开始
 *   2. 调用表达式(add) - 移动到程序主体的第一个元素
 *   3. 数字文字 (2) - 移动到调用表达式参数的第一个元素
 *   4. 调用表达式 (subtract) - 移动到调用表达式参数的第二个元素
 *   5. 数字文字 (4) - 移动到调用表达式参数的第一个元素
 *   6. 数字文字 (2) - 移动到调用表达式参数的第二个元素
 *
 * 如果我们直接操作这个 AST，而不是创建一个单独的 AST，我们可能会在这里引入各种抽象。
 * 但是只要访问树中的每个节点就足以满足我们的尝试。
 *
 * 我使用“访问”这个词的原因是因为存在如何表示对对象结构元素的操作的这种模式。
 *
 * 访客（Visitors）
 * --------
 *
 * 这里的基本思想是我们将创建一个“访客”对象，该对象具有接受不同节点类型的方法。
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * 当我们遍历 AST 时，只要我们“enter”匹配类型的节点，我们就会调用这个访客对象的方法。
 *
 * 为了让访客对象的方法发挥更多能力，我们还将传递节点和对父节点的引用。
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * 但是，也存在在“exit”上调用事物的可能性。 想象一下我们之前的树状结构列表形式:
 *
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * 当我们往下走, 我们会走到通向死路的分支. 当我们完成树的每一个分支时，我们就“exit”它。 
 * 所以沿着树向下我们“enter”每个节点，然后向上返回“exit”。
 *
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)·
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * 为了支持这一点，我们访客对象的最终形式将如下所示:
 *
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 */

/**
 * 代码生成(Code Generation)
 * ---------------
 *
 * 编译器的最后阶段是代码生成。 有时编译器会做一些与转换重叠的事情，
 * 但在大多数情况下，代码生成只是意味着把AST和字符串化代码提取出来。
 *
 * 代码生成器有几种不同的工作方式，一些编译器会重用之前的tokens，
 * 另一些编译器会创建代码的单独表示，以便它们可以线性地打印节点，
 * 但据我所知，大多数会使用我们刚刚创建的那种AST， 这就是我们要关注的。
 *
 * 实际上，代码生成器知道怎么“打印”AST的所有不同节点类型，
 * 并且它将递归调用自身来打印嵌套节点，直到将所有内容打印成一长串代码。
 */

/**
 * 就是这样！ 这就是编译器的所有不同部分。
 *
 * 现在并不是说每个编译器看起来都完全像我在这里描述的那样。
 * 编译器有许多不同的用途，它们可能需要比我详细说明的更多的步骤。
 *
 * 但是现在您应该对大多数编译器的结构有了大致的了解。
 *
 * 既然我已经解释了所有这些，那么你们就可以编写自己的编译器了吧？
 *
 * 开个玩笑，这将是我能帮到你们的 :P
 *
 * 那么，让我们开始吧...
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                    分词器（tokenizer）!
 * ============================================================================
 */

/**
 * 我们将从解析器的第一阶段开始，用分词器进行词法分析
 *
 * 我们现在要把表示代码的字符串分解成tokens
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

// 我们首先接受输入的代码字符串，然后设置两件事
function tokenizer(input) {

  // `current` 变量，用于像光标一样标识我们在代码中的位置。
  let current = 0;

  // 还有一个`tokens`数组用于入栈生成的tokens
  let tokens = [];

  // 我们首先创建一个`while`循环，让`current`变量在循环里尽可能多地递增
  // 这样做是因为我们可能希望在单个循环中多次增加 `current`，我们的tokens可以是任意长度。
  while (current < input.length) {

    // 我们还要把`current`指向的字条保存在`input`变量中
    let char = input[current];

    // 我们第一个要检查的是左括号。这个稍后用被用来调用表达式上，不过我们现在只关心这个字符 
    //
    // 现在检查是否有左括号
    if (char === '(') {

      // 如果检查到了，就push一个类型为`paren`的token到tokens数组中，
      // 并设置这个值为'('
      tokens.push({
        type: 'paren',
        value: '(',
      });

      // 向后推动current的指向
      current++;

      // continue跳过当前循环进入循环的下一个循环
      continue;
    }

    // 接下来，我们要来检查右括号。 做跟之前完全一样的操作: 检查是否有右括号，
    // push一个类型为`paren`的token到tokens数组
    // 向后失去current的指向，跳过当前循环
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // 接下来, 我们要来检查空格. 有意思的是，我们关心的是空格有没有以分隔字符的作用存在，
    // 而对于是否把空格存储为token，实际上就不是很重要了。等下就把他扔掉了
    //
    // 所以在这里我们只需要检查空格是否存在，如果存在，就continue进入下一个循环
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // 下一个token的类型是number. 这个不同于我们之前看到的，因为一个number可能为任意数量的字符，
    // 而我们希望把完整的字符捕获成一个token
    //
    //   (add 123 456)
    //        ^^^ ^^^
    //        只算成两个单独的token
    //
    // 所以，当遇到序列中的第一个数字，我们就开始处理
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {

      // 定义一个value变更和存放字符
      let value = '';

      // 接下来我们会遍历序列中的每个字符，一直到遇到一个不是number的字符，把每个number字符。
      // 存放进入value变量中，同时递增current的指向。
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // 做完这些后，把number类型的token push到tokens数组中。
      tokens.push({ type: 'number', value });

      // 跳过本次循环。
      continue;
    }

    // 我们还会在我们的语言里添加对字符串的支持，字符串是被双引号包裹着的任意文本
    //
    //   (concat "foo" "bar")
    //            ^^^   ^^^ string tokens
    //
    // 当检查到开引号（左双引号），我们就开始处理
    if (char === '"') {
      // 保留一个value变量用来构建string token
      let value = '';

      // 在这个token里，我们会跳过开头的双引号
      char = input[++current];

      // 我们会遍历每个字符，直到到达下一个双绰号
      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      // 跳过结束的双绰号
      char = input[++current];

      // 添加一个string类型的token到tokens数组里
      tokens.push({ type: 'string', value });

      continue;
    }

    // 最后一个token类型是name，这是一个相似于number序列的字母序列，在lisp里，他是函数的名称
    //
    //   (add 2 4)
    //    ^^^
    //    Name token
    //
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      // 同样的，我们遍历所有字母并保存到value变量中
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // And pushing that value as a token with the type `name` and continuing.
      // 然后把value作为类型为name的token push到tokens数组里并进入下一个循环
      tokens.push({ type: 'name', value });

      continue;
    }

    // 最后，如果没有匹配到任何字符，就抛出一个错误然后完全退出程序
    throw new TypeError('I dont know what this character is: ' + char);
  }

  // 在分词量结束的时候，我们简单返回一个tokens数组
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER(解析器)!!!
 * ============================================================================
 */

/**
 * 在我们的解析器中，我们将获取tokens数组，并将其转换成ast
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// 好了，我们定义一个parser函数，让他接受tokens数组
function parser(tokens) {

  // 我们再次维护一个current变量，让他作为一个指针
  let current = 0;

  // 不过，这次我们用递归来代替while循环，所以我们定义一个walk函数
  function walk() {

    // 在walk函数中，我们首先抓取current的token
    let token = tokens[current];

    // 我们现在要把各种类型的token拆分到不同的代码分支上支，从number类型的token开始
    //
    // 我们试着看看是否有一个number类型的token
    // 
    if (token.type === 'number') {

      // 如果有，就添加currnet
      current++;

      // 接下来我们会返回一个新ast结点，type是NumberLiteral，并且设置他的value为这个token的value
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // 如果是一个string，我们会参照number，创造一个StringLiteral结点
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    // 下面，在我们遇到一个遇到一个开括号的时候，我们要来寻找调用表达式（CallExpressions），
    if (
      token.type === 'paren' &&
      token.value === '('
    ) {

      // 我们增加currnet来跳过括号，因为在ast中我们不关心它
      token = tokens[++current];

      // 我们创建一个type为CallExpression的基节点，然后把当前token的value设置为这个节点的那么，
      // 因为左括号的下一个token是函数的名称
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // 我们增加current来跳函数名称的token
      token = tokens[++current];

      // 现在我们要遍历每一个token，这里token将成为前面CallExpression的参数，
      // 直到遇到一个右括号。
      //
      // 现在就是递归的主场了。我们用递归来解决问题，而不是试着解析可以无限嵌套的节点集 
      //
      // 为了解释这一点, 我们以Lisp代码为例. 你可以看到，add的参数是一个number和一个嵌套的CallExpression，
      // 而这个嵌套的CallExpression包含着他自己的number
      //
      //   (add 2 (subtract 4 2))
      //
      // 你还会注意到，在我们的tokens里，有很多个右括号
      //
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< 右括号
      //     { type: 'paren',  value: ')'        }, <<< 右括号
      //   ]
      //
      // 我们将嵌套walk函数，把current变量的值增加到任何CallExpression之后

      // 因此，我们创建一个while循环，这个循环在遇到一个type为paren，value为右括号的token之前，
      // 都会一直继续
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        // 我们会调用walk函数，然后把这个函数返回的节点放在当前结点的params中
        node.params.push(walk());
        token = tokens[current];
      }

      // 我们最后一次增加current来跳过右括号
      current++;

      // 返回处理后的结点
      return node;
    }

    // 同样的，如果我没有没有识别到token的类型，就抛出一个异常
    throw new TypeError(token.type);
  }

  // 现在我们要创建我们的AST，他是一个Program结点
  let ast = {
    type: 'Program',
    body: [],
  };

  // 我们将启动walk函数，把返回的结点push到ast的body里
  //
  // 我们用循环处理的原因是，是我们的程序可以一个接一个地使用CallExpression，
  // 而不是嵌套地使用
  //
  //   (add 2 2)
  //   (subtract 4 2)
  //
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // 在函数的结尾，我们的解析器将返回这个AST
  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                               THE TRAVERSER!!!
 * ============================================================================
 */

/**
 * So now we have our AST, and we want to be able to visit different nodes with
 * a visitor. We need to be able to call the methods on the visitor whenever we
 * encounter a node with a matching type.
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */

// So we define a traverser function which accepts an AST and a
// visitor. Inside we're going to define two functions...
function traverser(ast, visitor) {

  // A `traverseArray` function that will allow us to iterate over an array and
  // call the next function that we will define: `traverseNode`.
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  // `traverseNode` will accept a `node` and its `parent` node. So that it can
  // pass both to our visitor methods.
  function traverseNode(node, parent) {

    // We start by testing for the existence of a method on the visitor with a
    // matching `type`.
    let methods = visitor[node.type];

    // If there is an `enter` method for this node type we'll call it with the
    // `node` and its `parent`.
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    // Next we are going to split things up by the current node type.
    switch (node.type) {

      // We'll start with our top level `Program`. Since Program nodes have a
      // property named body that has an array of nodes, we will call
      // `traverseArray` to traverse down into them.
      //
      // (Remember that `traverseArray` will in turn call `traverseNode` so  we
      // are causing the tree to be traversed recursively)
      case 'Program':
        traverseArray(node.body, node);
        break;

      // Next we do the same with `CallExpression` and traverse their `params`.
      case 'CallExpression':
        traverseArray(node.params, node);
        break;

      // In the cases of `NumberLiteral` and `StringLiteral` we don't have any
      // child nodes to visit, so we'll just break.
      case 'NumberLiteral':
      case 'StringLiteral':
        break;

      // And again, if we haven't recognized the node type then we'll throw an
      // error.
      default:
        throw new TypeError(node.type);
    }

    // If there is an `exit` method for this node type we'll call it with the
    // `node` and its `parent`.
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // Finally we kickstart the traverser by calling `traverseNode` with our ast
  // with no `parent` because the top level of the AST doesn't have a parent.
  traverseNode(ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                              THE TRANSFORMER!!!
 * ============================================================================
 */

/**
 * Next up, the transformer. Our transformer is going to take the AST that we
 * have built and pass it to our traverser function with a visitor and will
 * create a new ast.
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// So we have our transformer function which will accept the lisp ast.
function transformer(ast) {

  // We'll create a `newAst` which like our previous AST will have a program
  // node.
  let newAst = {
    type: 'Program',
    body: [],
  };

  // Next I'm going to cheat a little and create a bit of a hack. We're going to
  // use a property named `context` on our parent nodes that we're going to push
  // nodes to their parent's `context`. Normally you would have a better
  // abstraction than this, but for our purposes this keeps things simple.
  //
  // Just take note that the context is a reference *from* the old ast *to* the
  // new ast.
  ast._context = newAst.body;

  // We'll start by calling the traverser function with our ast and a visitor.
  traverser(ast, {

    // The first visitor method accepts any `NumberLiteral`
    NumberLiteral: {
      // We'll visit them on enter.
      enter(node, parent) {
        // We'll create a new node also named `NumberLiteral` that we will push to
        // the parent context.
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    // Next we have `StringLiteral`
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // Next up, `CallExpression`.
    CallExpression: {
      enter(node, parent) {

        // We start creating a new node `CallExpression` with a nested
        // `Identifier`.
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // Next we're going to define a new context on the original
        // `CallExpression` node that will reference the `expression`'s arguments
        // so that we can push arguments.
        node._context = expression.arguments;

        // Then we're going to check if the parent node is a `CallExpression`.
        // If it is not...
        if (parent.type !== 'CallExpression') {

          // We're going to wrap our `CallExpression` node with an
          // `ExpressionStatement`. We do this because the top level
          // `CallExpression` in JavaScript are actually statements.
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

        // Last, we push our (possibly wrapped) `CallExpression` to the `parent`'s
        // `context`.
        parent._context.push(expression);
      },
    }
  });

  // At the end of our transformer function we'll return the new ast that we
  // just created.
  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            THE CODE GENERATOR!!!!
 * ============================================================================
 */

/**
 * Now let's move onto our last phase: The Code Generator.
 *
 * Our code generator is going to recursively call itself to print each node in
 * the tree into one giant string.
 */

function codeGenerator(node) {

  // We'll break things down by the `type` of the `node`.
  switch (node.type) {

    // If we have a `Program` node. We will map through each node in the `body`
    // and run them through the code generator and join them with a newline.
    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');

    // For `ExpressionStatement` we'll call the code generator on the nested
    // expression and we'll add a semicolon...
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) +
        ';' // << (...because we like to code the *correct* way)
      );

    // For `CallExpression` we will print the `callee`, add an open
    // parenthesis, we'll map through each node in the `arguments` array and run
    // them through the code generator, joining them with a comma, and then
    // we'll add a closing parenthesis.
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );

    // For `Identifier` we'll just return the `node`'s name.
    case 'Identifier':
      return node.name;

    // For `NumberLiteral` we'll just return the `node`'s value.
    case 'NumberLiteral':
      return node.value;

    // For `StringLiteral` we'll add quotations around the `node`'s value.
    case 'StringLiteral':
      return '"' + node.value + '"';

    // And if we haven't recognized the node, we'll throw an error.
    default:
      throw new TypeError(node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                         !!!!!!!!THE COMPILER!!!!!!!!
 * ============================================================================
 */

/**
 * FINALLY! We'll create our `compiler` function. Here we will link together
 * every part of the pipeline.
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
  let tokens = tokenizer(input);
  let ast    = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // and simply return the output!
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!YOU MADE IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// Now I'm just exporting everything...
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};