'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f2db19ece9153db3b68632c24fd60639",
"index.html": "c1fdd81548744344266f232dce7addd2",
"/": "c1fdd81548744344266f232dce7addd2",
"main.dart.js": "2f2a462e675226d58363747883a7fbc8",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "e57e061b7630880356e1408d179a6ca8",
"icons/Icon-maskable-192.png": "98ada6c2a91bb3d492cb7f142774efbf",
"icons/Icon-432.png": "8dacd4746ee53c8ae8c136062d29305d",
"icons/Icon-216.png": "1398b3ccb39e65fc60ed44a1ffccf93a",
"icons/Icon-maskable-512.png": "9cceacffa3224ff66fdbfc59bd929f86",
"manifest.json": "3a23ff1394fbeb339dadaed423dcd71f",
".git/config": "dbf302ced31c6e169664297d098478bf",
".git/objects/66/5e88bba75340c76521315fd2a2ad30878b6733": "c17d17abab0d22c3bc66d5c0ba0fc1e2",
".git/objects/66/17824a3effb5b4711d68b225b7cdad3733a8eb": "588753781a45ceb3feb9bc61ad0b1a23",
".git/objects/66/1c66b7535c5bb80436c30329ccfb6d6f7d7760": "7e1fde37cb4c2054799c821b314d1941",
".git/objects/3b/4252cc0e0ab4a22b4c84033ff2ff5ec18ee07c": "d01cc2dd163fb7310725128ce8334b97",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6a/c40ea635d0485d2811892bb2ba7781d0fad6a0": "8f4374eeb4e5d7ab74d21b73aeea4e2a",
".git/objects/69/5d9d7531ee955eddf1bed8323b4ac70c425a09": "c906b86a58ffd7054fd2d671682af890",
".git/objects/69/1a08356256b0fd22b268343d7b59e502eceb0c": "341c481a8d8a50679f1d930d71729203",
".git/objects/51/784c024c77787bdf15e757d25233a046e1cc7b": "66014abeaff9fdee86c6450ed4051375",
".git/objects/67/c57abe171c73094a8f86ef471b328d91be12dc": "c387c91904e59a486d920eed95a2cf5e",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/0e/11aa569bc81d6703202d45e4e0ceaa35c58e34": "0e1a1694bde02244178e920b15108ef5",
".git/objects/60/61c0275cbe493561faf991f45a75318e89ce51": "c839b9beb70b701e6936533cb73f0d0d",
".git/objects/60/4ea1e50576c9209b31e31877239cafec7366de": "1655e69bd8b3a2c0e4ed801c06c90cf8",
".git/objects/9c/60f82bace4818e3ef754b48005b93acf85df45": "85c3b5e77ead23a83ec022d4e589b154",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d9/1a54a39fb0ea59bdb7c1deded28f352cfbf1da": "9f682f102a14d9f40b5876d0614ff5d7",
".git/objects/da/915437e993e4aeef1c357838f541aefcd8ab52": "e4efb84c30603dd8c0029cb5aa3d766c",
".git/objects/d6/0ca800fa75812afa993d3f5c2af5a9560aeb16": "d0c8a4df66ab24f9bd0c83a2011776d4",
".git/objects/ab/ffb19177dbeca3cb78eed0b03abaad26d96557": "669f51a85d979d9f13fc0d0b10ffdb83",
".git/objects/e2/b1884bcbd5967a36466250d2d93bf990d7a2ec": "03bc87e332882bb1279257cdca1ce101",
".git/objects/e2/7ed5cb8b74da59904e39168a7fa5e710850fd7": "5830b1060c4dbf0e2bec0a159f3235a3",
".git/objects/eb/e39ddac46cec5821096622b1b66c7f26a34ea4": "7888d9199e6810b534dac5c011237e35",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/5bd05e126910bcd6fedb70448db1e23322f278": "dc17a158e319977ead150de67987d9b3",
".git/objects/cf/af3bcbe1ff48a54869f8191f3ceeec51601728": "8e06bc7c82fd23f453f55cb15a205e5f",
".git/objects/ca/52c3a9ad2720a507fc5925dfb04709e8122164": "80ac8617a1798c324253d6ea217f82b1",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fe/1a11ccb0e9f2b2a24bb4011a2d29ddcd6c4664": "2b4d8424082ec7dc8e8b604480e12e8d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/6c5af3b58d8812d126108551c01a2f1828d853": "8e08b972ba9c01e2c45a1efd2f797656",
".git/objects/29/b8cb6bc7695d39dddd30a5e0e5804b7bf9ee4d": "2c3d606149461262503be51d96d65d78",
".git/objects/29/9b040e1ae3c3e425337339724b960cb7025dca": "6b9f62b630d85e9c43e2a76eb1effa6a",
".git/objects/29/ee5b839c25336e0439285c51fb8a0477679b89": "65ea410c8ad1380795a25077b4ab4a15",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/12d0f9c04a2593b2ebdcea2d98148859f7f65e": "1c2542d2c6d255eacfa99978be1b761b",
".git/objects/89/d1e44c15990db8de9b87d002dab45292de351c": "f0599732eaa5ad89a2cc836f73eb3b4d",
".git/objects/89/af094d61df6595962499c431b07fc1ebafa0a9": "319743c8cae26d7d78fcc172f2cbc70d",
".git/objects/45/a23835b91aea6d8ca4929fd1662d112167af48": "c318a3d236ba57b7ccd9ac2850957f1f",
".git/objects/73/41bb528ef53cba7ce2487d2386caf4841e78e3": "0ab1dc287743a72c681d174b6d348414",
".git/objects/28/60f21f9875a935852e6f68d7d229a1d33e4550": "c41595a8efc42d603036ef5f919bebb3",
".git/objects/8f/afaac5907f115df0a5865c00826effa7f27763": "77dd2614a361e3c4249728c4bd21fc80",
".git/objects/19/65a41c3817d9554acc2e72a113c14db87a690f": "ca9d80c2fa6c95667c76ec3d8f3c4b41",
".git/objects/26/7324e8708eb27f2065d100a90c500aa444f936": "be506fb9b907241e31991f498215ba07",
".git/objects/44/b3dc5f8fd557ecdf64f89f1e5cc4d82fe28977": "ce1f8ee7504683b92b479499f5e8efc7",
".git/objects/9f/89380e9d8d1affdf47bb3505a2b0ef21391520": "eaf184dbc768877aa9c2f1f264bbe705",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/6b090dd5f3e0ea0ccc5937c888183c32dc8f83": "3ce8450a3d177b9705a34508bac07514",
".git/objects/96/89da7a761cb3b59d430c92599d2e4d00927d37": "771e50db144ae050d7ae9be090752108",
".git/objects/3a/24e73357d9b88af538869e961090daa0609b2d": "bdf1a5b84a075db19839cadb72a4acb3",
".git/objects/3a/b754ce51e7281b45c6111f3d4f9e02eb2ec60c": "f282eb83a20fefde8c1ff4846b97c27a",
".git/objects/98/0b9b37481017feebb393ca9e5f59f97407d1a4": "b48832802a848cab773a8c2985bd434f",
".git/objects/37/7c18bcbd2b3299664c808a2263708f0264e2c1": "709e63c1a8a6b5a7e77268779ac9e567",
".git/objects/37/a1ce21f7539bb8e99d52f4530b43818e74b055": "9c2e61ce93b263bbe53360c821b929d5",
".git/objects/06/7bd799d8463c429ba2852cc643534673c79eb2": "7733d10bb83cb63617302ce2a00639ee",
".git/objects/39/b2a37303799689d39fdf7c4d702cc942b48374": "b9740b5155fdde9fca5c2af1f676ee89",
".git/objects/39/f44348e1d3fd3ed0a90c18d2cf38ac04501be4": "9ec64f47ac848c0224bacc16830041bc",
".git/objects/63/c5503fe7d261c2507f01b40e54e4388ee08601": "24eac1549509869e1bdf932138b38c40",
".git/objects/90/b83d858956734eb3ed98766f7ce0942ee21e03": "c047e1fb239c0557e936080dc84844a7",
".git/objects/bf/f474f151a2bac40c0afda821e96b321c73a4d2": "dede80d420a7945bd44a2427a4bcd192",
".git/objects/d3/679b949f3e63a80c010c8138cddc8172638d1f": "330dd7c99c27d61d776a9b7f7c50a2e2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/51fabc1cb228614ec77bcdf5623986638b056c": "32c7879ec2f1a554baa2b0d4783542a8",
".git/objects/a0/5b3f77793dc5e14858ec9540a19bbd0d275772": "6c0ee0e0dbe39f0a1dd7fa3277b6efcb",
".git/objects/dc/a069d3fcfd0cd2662da38bf04f52b1997089d9": "b6e77ae8d09420ff9d5884ccef6f2456",
".git/objects/b6/66765b22afb628a393a7097824c701f79bc2b8": "620834e34ee1a21e7b67c0b5474dcde3",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/124859a1234173ae2197fe2dbb50a2973c04b3": "43870c90c7259b32387d620cf0f81038",
".git/objects/db/f748904c26cdc6eec14d5cf104a8cc665a0d86": "36caef474872c34f3d2fda8b6ecad43f",
".git/objects/a6/53ac6b4a71e7d89d8dd978a25476832530c55a": "ec41e9190e217d22f23ef8d6007ba97e",
".git/objects/ef/85a1109e31988ea4024c62573cebf360729cc9": "1b24b16587e528288b8e8df812eae760",
".git/objects/c4/aba36d9ba087b1521abc554978dbdaf5027094": "62d72a63b7130c3fefdb1b2af8f2d2d1",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/e8d69c6b9fc58b98a06e9cc1e5baaf02d3b944": "2d99db06d3d78bf1c0b6fe4736a02363",
".git/objects/e6/a0b08769e4f092181c2c079b146d62c50856b6": "36cf94ac5e36319240838013749a02c4",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e9/dd5ccabe5c3f75683e44262b1cd5d2b2608eb6": "e2856c5ef04970d35e10d213631b31ae",
".git/objects/e9/0fa6fd277e87c05830d9d7b892149f2ff27158": "f678acb17702031ae10dd2b5e66ff0e9",
".git/objects/e9/bafe30db9c3b42eb48c8dd6303218f3817c435": "ff1ead9b86f54957418a052c934045b9",
".git/objects/cb/7e4af67de03702003bd60a0eb5db40b93f3fd1": "8714cf325dc1caaa701a449a5ab5392c",
".git/objects/e0/1d88d9eaef3c143c6a395129e06abf26a645d0": "5aaf885dea2b3016c7b577dff88ddb33",
".git/objects/e0/e522ec14c57e4c56b075a3429e1f91c357481c": "531ae290eb2ac9966538678fda6e6d8f",
".git/objects/79/fabf25879d6eb70a0eb9357178038333def71a": "302be318f23b370eaa3083f1361ceccd",
".git/objects/2d/d70e900f8b77dd829e9f81c0550dbc7b97a5b4": "b1a1cdddf359f1f84f70b285e7e73f7e",
".git/objects/83/ec61140aa73abd91d9c73d31da013244256953": "93df5cfb55f8b9529639eb0931ec07ed",
".git/objects/77/2f7de374bf8491db7ded7f11f269f5080de663": "c41538cfee48914f24e3a34a3a957b7a",
".git/objects/70/f586119c080c105f3818e2dcd5d40ea0b9e46a": "15b2067a816986ec3ec2e27f1d7ab6fe",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/d8e0b80dd02cd84cdc2cc6fe2d874e91da98a9": "ae00989ed0e1056c1ca865f6be91baae",
".git/objects/23/e61a849243c9ceaf066824b833255e48f54921": "93b5b28d71f11bb46b8962c8a252630e",
".git/objects/8d/76558459bc4ed13bafbe4c5c136ed6e311a7ac": "9d03edfeb29195b57c180629c274484e",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/595ad5e59c9fd5b59fb0f38397fb8b28d6d729": "2ba37440f99c3b6eaa71c31074836cba",
".git/objects/2e/1da70b04abcf569dd439ee30a1b08434d68e76": "f0428f5fc9b95bcd9e91962adb9fabd1",
".git/objects/78/54c9234406cff1be6c411ec69a44cb1e0ab742": "f78b99223fa9b7d4d7009e7e71cba46d",
".git/objects/7f/464c32702369f0bfa731681beeae3733260efc": "e7ae5f209b6228848f60d6fb3c34557e",
".git/objects/14/ecefa0d9b2b3f39534152f6c928ac4b0704782": "06ce4eb525216450b808919f02c5c8f6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e317c4a2a172f6f5ce11aaf78e9833c6",
".git/logs/refs/heads/main": "64a3fa14111e78f69cba8fb573a71d6f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8e580c28039aab7454a51096bd6adcff",
".git/index": "f66cebe29cec01ce9a61c1acf23e7992",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "2af6b96326d858913bcdb4b5f92201ba",
"assets/NOTICES": "eb5f6b3b895e1f61e1fceab66d77c9d8",
"assets/FontManifest.json": "19edf42864e94a1e6c21f637e64974be",
"assets/AssetManifest.bin.json": "e58b4602fb0ef7491e246a616d5c4cc0",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/nx_ui/assets/search_icon.svg": "dae6d88eea5d1dfb119dbdecd6fab3c1",
"assets/packages/nx_ui/assets/logout_icon.svg": "8173ae2162eed1a41bd68b3016692f37",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0d8467dc053464e2b8a6be105a57fb3e",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/nx_profile-1.PNG": "45f42b1a5f0b1709c1534af4abb1de50",
"assets/assets/images/nx_profile-2.PNG": "05abdf72e904b1fe6387c379bc46b554",
"assets/assets/images/nx_profile-3.PNG": "9f5dceb0b6cceb7101d4022a344a543b",
"assets/assets/images/nx_profile-4.PNG": "44530e7c42d060d63f47d8c1c226b647",
"assets/assets/images/gallery-25404.png": "80430736a0ebc7993d4d59c486bd3bfb",
"assets/assets/images/nx_payments-1.png": "724734420373728bfa428382e528d8ce",
"assets/assets/images/nx_payments-2.png": "68509dddd400f45a3c3101c87ba8b22d",
"assets/assets/images/favicon-icon.svg": "a65554eaf10d75df2ec457e256135cb3",
"assets/assets/images/nx_payments-3.png": "46fc40e946d769a4899cf1e4d9c1dc9a",
"assets/assets/images/gallery-2539.png": "c52b317f7627a60847ad7b2c9f3937a7",
"assets/assets/images/gallery-2538.png": "bf5d0c9518d0ff77f04a1fe8cf716eb8",
"assets/assets/images/nx_calendar-7.png": "141ad8447b822ee20a85633c31c79b98",
"assets/assets/images/nx_sequrify-4.png": "79b486a37361d7e202d6179d70d0ad4d",
"assets/assets/images/nx_biometry-2.png": "46fcacc49c1e019f848d50342c843254",
"assets/assets/images/nx_biometry-3.png": "1734175bda99b56fd36ebc0a6e1ea222",
"assets/assets/images/nx_sequrify-5.png": "e67039267130cee9544b57bdce053047",
"assets/assets/images/nx_calendar-6.png": "8ee4dc0e8592ab210e97ee9bce918f5d",
"assets/assets/images/nx_calendar-4.png": "0d6ec42a1964a015254e64211d39e54a",
"assets/assets/images/nx_biometry-1.png": "992e45611537ff7725c0da76c9c58bee",
"assets/assets/images/nx_ui-4.PNG": "dbce2bd732e639524b0fecfd931a5925",
"assets/assets/images/nx_sequrify-6.png": "4487aa2794a54b1c6651f6e2a72f7def",
"assets/assets/images/gallery-2537.png": "14721060b97e6314b7310543cd271d00",
"assets/assets/images/nx_calendar-5.png": "6307b8ab8f83ea6c6c5fbc33bfb06052",
"assets/assets/images/nx_calendar-1.png": "8d77748dd96da92ae93bde41fd518a22",
"assets/assets/images/nx_sequrify-2.png": "4cac12de5e0c1bc2fa8b690e393c11ce",
"assets/assets/images/favicon-logo.png": "e57e061b7630880356e1408d179a6ca8",
"assets/assets/images/nx_ui-1.PNG": "7bd30ce799db7e410c4a38eabea72350",
"assets/assets/images/linkedin.png": "31016cc6dbbeacb2b8e712f834243ec8",
"assets/assets/images/nx_sequrify-3.png": "d24cdf69aecb5900be509d2a21e2a9c4",
"assets/assets/images/nx_feedback-1.png": "72c999b57524b64f5bcf86d0fffd5aec",
"assets/assets/images/nx_calendar-2.png": "371173c88ba265f9ac116c282a7480f4",
"assets/assets/images/nx_feedback-3.png": "1cbb52012decac836a683a724f34c419",
"assets/assets/images/nx_sequrify-1.png": "c1159ede48c603132d109263231f6d3e",
"assets/assets/images/nx_ui-3.PNG": "6dd3964ec5ee228f350c0331022757e2",
"assets/assets/images/nx_ui-2.PNG": "e624803729505cd623e301aa9be20800",
"assets/assets/images/nx_feedback-2.png": "6a02fb6fd57023181e201d1a923da554",
"assets/assets/images/nx_calendar-3.png": "1086420866de8e86742d7e29e5422c44",
"assets/assets/images/gallery-2542.png": "2cc45e29729edd577d45fe141ade5419",
"assets/assets/images/nx_auth-4.png": "c8ece67d017df943622696ad5fee128b",
"assets/assets/images/nx_auth-5.png": "cbfbc1103166ac93473115ac45d3c3af",
"assets/assets/images/gallery-2543.png": "4510e7050ad0a68ecc5d13d5967e11e3",
"assets/assets/images/icon_in.svg": "68809a605b338c8d2a086a27b1faf2a9",
"assets/assets/images/gallery-2541.png": "d8a3b03c74598eeadefb8d8641db6b36",
"assets/assets/images/nx_auth-6.png": "ecc0a2da086e8ef786a54c4cd8408b0b",
"assets/assets/images/icon_fb.svg": "eaeb21f58dbe4538c89a6c8ecc14d8ef",
"assets/assets/images/gallery-2540.png": "50ec6415988d626aa45be47a393f4982",
"assets/assets/images/gallery-2544.png": "cd0ced7c8ab4eb9f52f4e5fc08dee639",
"assets/assets/images/nx_auth-2.png": "f21b4c1305cc6ab6757f153179fc028b",
"assets/assets/images/nx_auth-3.png": "c08d2090f20d50de0a5eee04352158bb",
"assets/assets/images/nx_auth-1.png": "15332ff5ddb40a086874d7c68cacd1be",
"assets/assets/data/nx_components.json": "8ee3930616139fd2476eaa8a5e2af49b",
"assets/assets/data/nx_dashboard.json": "e232b40c0e57f0c1053e1f9c75b7c002",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
