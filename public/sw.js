if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const f=e=>c(e,i),r={module:{uri:i},exports:t,require:f};s[i]=Promise.all(n.map((e=>r[e]||f(e)))).then((e=>(a(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/MyTextFile.txt",revision:"cc6203c2b6f0dbfd987fd0b6351f0967"},{url:"/MyTextFile.zip",revision:"406f7e96f4d6e269844babd12d4bf434"},{url:"/_next/static/chunks/1138-796e7a0c33bfc069.js",revision:"796e7a0c33bfc069"},{url:"/_next/static/chunks/1158.a527b2610aca6226.js",revision:"a527b2610aca6226"},{url:"/_next/static/chunks/1180.6d37408fa76ed528.js",revision:"6d37408fa76ed528"},{url:"/_next/static/chunks/124.0c161ab1c3ac0f29.js",revision:"0c161ab1c3ac0f29"},{url:"/_next/static/chunks/1288.4b01fe11090fa0aa.js",revision:"4b01fe11090fa0aa"},{url:"/_next/static/chunks/1324.06e6df5f3bd479e4.js",revision:"06e6df5f3bd479e4"},{url:"/_next/static/chunks/134.ddfdd92666824a7e.js",revision:"ddfdd92666824a7e"},{url:"/_next/static/chunks/1352.d1308453e63f1ab2.js",revision:"d1308453e63f1ab2"},{url:"/_next/static/chunks/1361.4f49dbef4cfe9cfd.js",revision:"4f49dbef4cfe9cfd"},{url:"/_next/static/chunks/1377.2b59f8880e9399dd.js",revision:"2b59f8880e9399dd"},{url:"/_next/static/chunks/1489.e55e08eba529bbc8.js",revision:"e55e08eba529bbc8"},{url:"/_next/static/chunks/1490.5de6690a99f747fd.js",revision:"5de6690a99f747fd"},{url:"/_next/static/chunks/1562.d389fae9c3d5343c.js",revision:"d389fae9c3d5343c"},{url:"/_next/static/chunks/1604.79a54f5a21cf5c10.js",revision:"79a54f5a21cf5c10"},{url:"/_next/static/chunks/1650.ade526c6d60731fb.js",revision:"ade526c6d60731fb"},{url:"/_next/static/chunks/1675.17fa59985ea25d4c.js",revision:"17fa59985ea25d4c"},{url:"/_next/static/chunks/1681.bc29b934bf3abcf1.js",revision:"bc29b934bf3abcf1"},{url:"/_next/static/chunks/1691.d23a47502c6f3c1f.js",revision:"d23a47502c6f3c1f"},{url:"/_next/static/chunks/17.2a082e9ce3aa1319.js",revision:"2a082e9ce3aa1319"},{url:"/_next/static/chunks/1810.3976d1f2a9208fef.js",revision:"3976d1f2a9208fef"},{url:"/_next/static/chunks/1961.64db0afbbcbe4aec.js",revision:"64db0afbbcbe4aec"},{url:"/_next/static/chunks/2030.9d2e6f29dd9ee60b.js",revision:"9d2e6f29dd9ee60b"},{url:"/_next/static/chunks/2155.cbba4f25825fd434.js",revision:"cbba4f25825fd434"},{url:"/_next/static/chunks/216.2b36e89bc8993a6b.js",revision:"2b36e89bc8993a6b"},{url:"/_next/static/chunks/2167.7dca7483cb63b751.js",revision:"7dca7483cb63b751"},{url:"/_next/static/chunks/2175.9380150f65840ec5.js",revision:"9380150f65840ec5"},{url:"/_next/static/chunks/2187.69a5f2f7fd2c5368.js",revision:"69a5f2f7fd2c5368"},{url:"/_next/static/chunks/2209.f794b611f01bc0ff.js",revision:"f794b611f01bc0ff"},{url:"/_next/static/chunks/2247.f2e13c545e51372c.js",revision:"f2e13c545e51372c"},{url:"/_next/static/chunks/2278.f89774c07c84394f.js",revision:"f89774c07c84394f"},{url:"/_next/static/chunks/23.62b1230560009f36.js",revision:"62b1230560009f36"},{url:"/_next/static/chunks/2329.b909c4e9c240280b.js",revision:"b909c4e9c240280b"},{url:"/_next/static/chunks/2373.8bdbc43e4529a651.js",revision:"8bdbc43e4529a651"},{url:"/_next/static/chunks/2380.0f70d5f4c3fe8106.js",revision:"0f70d5f4c3fe8106"},{url:"/_next/static/chunks/2394.13a8dce987757918.js",revision:"13a8dce987757918"},{url:"/_next/static/chunks/2443.bae25e633208b94a.js",revision:"bae25e633208b94a"},{url:"/_next/static/chunks/2569.78b5d51e75a3cc0e.js",revision:"78b5d51e75a3cc0e"},{url:"/_next/static/chunks/2601.4efd8a8ebe4a0cdb.js",revision:"4efd8a8ebe4a0cdb"},{url:"/_next/static/chunks/2705.a532b254704aff01.js",revision:"a532b254704aff01"},{url:"/_next/static/chunks/2730.5ce9f32f73f361da.js",revision:"5ce9f32f73f361da"},{url:"/_next/static/chunks/2736.d0cc874c08613b81.js",revision:"d0cc874c08613b81"},{url:"/_next/static/chunks/2738.57dfbd34702c666a.js",revision:"57dfbd34702c666a"},{url:"/_next/static/chunks/2744.7fbbd2fe96d8f0c1.js",revision:"7fbbd2fe96d8f0c1"},{url:"/_next/static/chunks/2901.638a0f5fe450da65.js",revision:"638a0f5fe450da65"},{url:"/_next/static/chunks/2902.50c8e90fbfb95db1.js",revision:"50c8e90fbfb95db1"},{url:"/_next/static/chunks/301.007c0735f0918f2d.js",revision:"007c0735f0918f2d"},{url:"/_next/static/chunks/3040.c4b5620d33a6f655.js",revision:"c4b5620d33a6f655"},{url:"/_next/static/chunks/3043.bd7e31fe72397634.js",revision:"bd7e31fe72397634"},{url:"/_next/static/chunks/3086.ef8bf2d270785b7f.js",revision:"ef8bf2d270785b7f"},{url:"/_next/static/chunks/3173.fe3e998b4beb4b97.js",revision:"fe3e998b4beb4b97"},{url:"/_next/static/chunks/3206.b50cc8305cd7539b.js",revision:"b50cc8305cd7539b"},{url:"/_next/static/chunks/3222.e7b50945f70e5f35.js",revision:"e7b50945f70e5f35"},{url:"/_next/static/chunks/3243.d4dc3f89270ee19f.js",revision:"d4dc3f89270ee19f"},{url:"/_next/static/chunks/3255.30ef7cf7dfb36750.js",revision:"30ef7cf7dfb36750"},{url:"/_next/static/chunks/3296.b4e5f3407687bd66.js",revision:"b4e5f3407687bd66"},{url:"/_next/static/chunks/3399.2274f1eb73bd9caf.js",revision:"2274f1eb73bd9caf"},{url:"/_next/static/chunks/3414.1e8bce705546da07.js",revision:"1e8bce705546da07"},{url:"/_next/static/chunks/3433.3e68d1f3b3865d31.js",revision:"3e68d1f3b3865d31"},{url:"/_next/static/chunks/345.2b0315fade6cc3fb.js",revision:"2b0315fade6cc3fb"},{url:"/_next/static/chunks/3483.b58259973a1d1d8d.js",revision:"b58259973a1d1d8d"},{url:"/_next/static/chunks/3487.2bbaa2bd324a8231.js",revision:"2bbaa2bd324a8231"},{url:"/_next/static/chunks/3545.bd89d6ae419dcb47.js",revision:"bd89d6ae419dcb47"},{url:"/_next/static/chunks/3549.5e941798237fb7e5.js",revision:"5e941798237fb7e5"},{url:"/_next/static/chunks/3614.ba4c8c14ece19e23.js",revision:"ba4c8c14ece19e23"},{url:"/_next/static/chunks/3625.69719d1014b53e9b.js",revision:"69719d1014b53e9b"},{url:"/_next/static/chunks/3666.3db347cf1d3be309.js",revision:"3db347cf1d3be309"},{url:"/_next/static/chunks/3667.7a8e0978d0b5f6ae.js",revision:"7a8e0978d0b5f6ae"},{url:"/_next/static/chunks/3714.91b2426a0faa5a59.js",revision:"91b2426a0faa5a59"},{url:"/_next/static/chunks/3734.75f720a8c7686ace.js",revision:"75f720a8c7686ace"},{url:"/_next/static/chunks/3751.bcd3449ad22d5e38.js",revision:"bcd3449ad22d5e38"},{url:"/_next/static/chunks/3814.da02f260b5e154e7.js",revision:"da02f260b5e154e7"},{url:"/_next/static/chunks/386d12a5.0478377be64f4993.js",revision:"0478377be64f4993"},{url:"/_next/static/chunks/3882.91fdc8f8ff03f12d.js",revision:"91fdc8f8ff03f12d"},{url:"/_next/static/chunks/3912.6d66fdd0dd157b82.js",revision:"6d66fdd0dd157b82"},{url:"/_next/static/chunks/3931.d865dafdf2a49611.js",revision:"d865dafdf2a49611"},{url:"/_next/static/chunks/3959-a853d0b53a7829b2.js",revision:"a853d0b53a7829b2"},{url:"/_next/static/chunks/3969.f6f1e1788db01a09.js",revision:"f6f1e1788db01a09"},{url:"/_next/static/chunks/3970.100d5a7369f7caf5.js",revision:"100d5a7369f7caf5"},{url:"/_next/static/chunks/398.1a7dfe604ebae601.js",revision:"1a7dfe604ebae601"},{url:"/_next/static/chunks/4043.6abd4158a3eae54d.js",revision:"6abd4158a3eae54d"},{url:"/_next/static/chunks/4049.7ee084c11551ca96.js",revision:"7ee084c11551ca96"},{url:"/_next/static/chunks/412.a7197c1320bba2e4.js",revision:"a7197c1320bba2e4"},{url:"/_next/static/chunks/4161.0b5c26d5b748a970.js",revision:"0b5c26d5b748a970"},{url:"/_next/static/chunks/4165.67e2d9f6fa111b7a.js",revision:"67e2d9f6fa111b7a"},{url:"/_next/static/chunks/4168.468793d3270a5f8e.js",revision:"468793d3270a5f8e"},{url:"/_next/static/chunks/419.c1791c0fc1aff590.js",revision:"c1791c0fc1aff590"},{url:"/_next/static/chunks/42.259df05b74d0494e.js",revision:"259df05b74d0494e"},{url:"/_next/static/chunks/4215.6e1a325cf4655d6d.js",revision:"6e1a325cf4655d6d"},{url:"/_next/static/chunks/4287.6248def9d1cceb83.js",revision:"6248def9d1cceb83"},{url:"/_next/static/chunks/4372.c87dff8b76896731.js",revision:"c87dff8b76896731"},{url:"/_next/static/chunks/4417.b21d0e99c416fcf4.js",revision:"b21d0e99c416fcf4"},{url:"/_next/static/chunks/4470.25944c4576c1e124.js",revision:"25944c4576c1e124"},{url:"/_next/static/chunks/4473.8a157a11232c0fdd.js",revision:"8a157a11232c0fdd"},{url:"/_next/static/chunks/4515.81af0e24ed677409.js",revision:"81af0e24ed677409"},{url:"/_next/static/chunks/4590.a4cce99bae537ca1.js",revision:"a4cce99bae537ca1"},{url:"/_next/static/chunks/4669.3fc4b0cda5cbdc73.js",revision:"3fc4b0cda5cbdc73"},{url:"/_next/static/chunks/4686.b07883393b5a6138.js",revision:"b07883393b5a6138"},{url:"/_next/static/chunks/4687.13cb780d1cd3ff8e.js",revision:"13cb780d1cd3ff8e"},{url:"/_next/static/chunks/4730.a96b81ed0f7495d3.js",revision:"a96b81ed0f7495d3"},{url:"/_next/static/chunks/4764.940e96b4372aa66b.js",revision:"940e96b4372aa66b"},{url:"/_next/static/chunks/481.2d29d0e785a78c9a.js",revision:"2d29d0e785a78c9a"},{url:"/_next/static/chunks/4842.87fcdf8be4b86f80.js",revision:"87fcdf8be4b86f80"},{url:"/_next/static/chunks/4864.7fb75c49f72e12c6.js",revision:"7fb75c49f72e12c6"},{url:"/_next/static/chunks/4873.146aae3a8fb7805c.js",revision:"146aae3a8fb7805c"},{url:"/_next/static/chunks/4949.740c746bac1509f0.js",revision:"740c746bac1509f0"},{url:"/_next/static/chunks/5007.a40aabf52c1eb3bd.js",revision:"a40aabf52c1eb3bd"},{url:"/_next/static/chunks/5009.bc609fc195b0b15f.js",revision:"bc609fc195b0b15f"},{url:"/_next/static/chunks/5071.20c795151b70a95c.js",revision:"20c795151b70a95c"},{url:"/_next/static/chunks/5134.0d6551a2a05e912b.js",revision:"0d6551a2a05e912b"},{url:"/_next/static/chunks/515.8465860fb0785538.js",revision:"8465860fb0785538"},{url:"/_next/static/chunks/5266.933345efee4c3c67.js",revision:"933345efee4c3c67"},{url:"/_next/static/chunks/5369.857835ea4ff741ac.js",revision:"857835ea4ff741ac"},{url:"/_next/static/chunks/5484.960fc18e90477aa5.js",revision:"960fc18e90477aa5"},{url:"/_next/static/chunks/5499.30d817825be38561.js",revision:"30d817825be38561"},{url:"/_next/static/chunks/5515.fe324a4f9cd6d656.js",revision:"fe324a4f9cd6d656"},{url:"/_next/static/chunks/5525.70e2f13f98a340ae.js",revision:"70e2f13f98a340ae"},{url:"/_next/static/chunks/5532.3c17e12f276c5d3d.js",revision:"3c17e12f276c5d3d"},{url:"/_next/static/chunks/5670.2dc10799279f26ad.js",revision:"2dc10799279f26ad"},{url:"/_next/static/chunks/5708.1304bebce95bb848.js",revision:"1304bebce95bb848"},{url:"/_next/static/chunks/5734.216603c4e7005ea0.js",revision:"216603c4e7005ea0"},{url:"/_next/static/chunks/576.484a5f2b23a0045b.js",revision:"484a5f2b23a0045b"},{url:"/_next/static/chunks/5775.3d1cdd8071f08ac9.js",revision:"3d1cdd8071f08ac9"},{url:"/_next/static/chunks/5786.f94ce459cbbff699.js",revision:"f94ce459cbbff699"},{url:"/_next/static/chunks/5831.6bf54d856fde41c2.js",revision:"6bf54d856fde41c2"},{url:"/_next/static/chunks/5849.80a2bdae2bd4cf26.js",revision:"80a2bdae2bd4cf26"},{url:"/_next/static/chunks/5887.89788f836296d0d1.js",revision:"89788f836296d0d1"},{url:"/_next/static/chunks/5983.62c4c7f61c5275c7.js",revision:"62c4c7f61c5275c7"},{url:"/_next/static/chunks/6008.a17ed0cea3f19438.js",revision:"a17ed0cea3f19438"},{url:"/_next/static/chunks/6115.2d82f6f72f3f7844.js",revision:"2d82f6f72f3f7844"},{url:"/_next/static/chunks/6185.cd50ac9ca49c7964.js",revision:"cd50ac9ca49c7964"},{url:"/_next/static/chunks/6199.f785396844dff0b2.js",revision:"f785396844dff0b2"},{url:"/_next/static/chunks/6272.e19b88916df1bbed.js",revision:"e19b88916df1bbed"},{url:"/_next/static/chunks/6273.be8288cf16c26350.js",revision:"be8288cf16c26350"},{url:"/_next/static/chunks/6330.16956315876dfffb.js",revision:"16956315876dfffb"},{url:"/_next/static/chunks/6353.d3788344411e1a7b.js",revision:"d3788344411e1a7b"},{url:"/_next/static/chunks/6358.8881864e32b4ea8e.js",revision:"8881864e32b4ea8e"},{url:"/_next/static/chunks/6361.31c0a29e79de1157.js",revision:"31c0a29e79de1157"},{url:"/_next/static/chunks/6441.5069e1f2c65c004a.js",revision:"5069e1f2c65c004a"},{url:"/_next/static/chunks/6458.4fadd6e8db41ecde.js",revision:"4fadd6e8db41ecde"},{url:"/_next/static/chunks/6465.d77dc1a30ce94e0d.js",revision:"d77dc1a30ce94e0d"},{url:"/_next/static/chunks/649.48d1abb53a6cf4b3.js",revision:"48d1abb53a6cf4b3"},{url:"/_next/static/chunks/6642.e7e0ff7e8fcf3e5f.js",revision:"e7e0ff7e8fcf3e5f"},{url:"/_next/static/chunks/6685.240982a42ca74026.js",revision:"240982a42ca74026"},{url:"/_next/static/chunks/6752.23ecd905fabbbebb.js",revision:"23ecd905fabbbebb"},{url:"/_next/static/chunks/6753.cf8c60b0d7b33ef4.js",revision:"cf8c60b0d7b33ef4"},{url:"/_next/static/chunks/6782.63cfd54c411f6298.js",revision:"63cfd54c411f6298"},{url:"/_next/static/chunks/6802.68a12d532e61b476.js",revision:"68a12d532e61b476"},{url:"/_next/static/chunks/6829.d1d1a37a895be39a.js",revision:"d1d1a37a895be39a"},{url:"/_next/static/chunks/6857.d29939360e64226a.js",revision:"d29939360e64226a"},{url:"/_next/static/chunks/6883.73d3fb15c8c394cc.js",revision:"73d3fb15c8c394cc"},{url:"/_next/static/chunks/7128.2f1220fbea4b69e6.js",revision:"2f1220fbea4b69e6"},{url:"/_next/static/chunks/7153.297ff5ef2bf85c54.js",revision:"297ff5ef2bf85c54"},{url:"/_next/static/chunks/7182.925174c0273c9c69.js",revision:"925174c0273c9c69"},{url:"/_next/static/chunks/7281.0b9200ca822cd89a.js",revision:"0b9200ca822cd89a"},{url:"/_next/static/chunks/7303.1777a2a500886882.js",revision:"1777a2a500886882"},{url:"/_next/static/chunks/7334.b3d0673976543c89.js",revision:"b3d0673976543c89"},{url:"/_next/static/chunks/7371.c17f42d2273e1135.js",revision:"c17f42d2273e1135"},{url:"/_next/static/chunks/7467.a04fea1aa9a7809b.js",revision:"a04fea1aa9a7809b"},{url:"/_next/static/chunks/7479.acf9f7763a540b32.js",revision:"acf9f7763a540b32"},{url:"/_next/static/chunks/7480.c0f7701931e92f8d.js",revision:"c0f7701931e92f8d"},{url:"/_next/static/chunks/751.4d850090fe6111b5.js",revision:"4d850090fe6111b5"},{url:"/_next/static/chunks/7578.2437581abc952d2f.js",revision:"2437581abc952d2f"},{url:"/_next/static/chunks/75cdfc54.2c6bfabc53a2e2a0.js",revision:"2c6bfabc53a2e2a0"},{url:"/_next/static/chunks/7653.33978e584d50c287.js",revision:"33978e584d50c287"},{url:"/_next/static/chunks/7656.af3919597123ea81.js",revision:"af3919597123ea81"},{url:"/_next/static/chunks/7660.c6e9125b85123ce2.js",revision:"c6e9125b85123ce2"},{url:"/_next/static/chunks/77.a5b3537ecbe6a5a1.js",revision:"a5b3537ecbe6a5a1"},{url:"/_next/static/chunks/7700.0c7a0cf836709077.js",revision:"0c7a0cf836709077"},{url:"/_next/static/chunks/7711.8d42167df25f5527.js",revision:"8d42167df25f5527"},{url:"/_next/static/chunks/7714.a3149a7791184b44.js",revision:"a3149a7791184b44"},{url:"/_next/static/chunks/791.7144be6dc01b485f.js",revision:"7144be6dc01b485f"},{url:"/_next/static/chunks/7946.237218251f09f652.js",revision:"237218251f09f652"},{url:"/_next/static/chunks/7981.66eba2d1cd4baf75.js",revision:"66eba2d1cd4baf75"},{url:"/_next/static/chunks/8015.aa05b43381a37bec.js",revision:"aa05b43381a37bec"},{url:"/_next/static/chunks/81.b20174c27761ffce.js",revision:"b20174c27761ffce"},{url:"/_next/static/chunks/8116.62eef8ca78575458.js",revision:"62eef8ca78575458"},{url:"/_next/static/chunks/8163.3e056cdecf5711f5.js",revision:"3e056cdecf5711f5"},{url:"/_next/static/chunks/8229.66892f968a641dd2.js",revision:"66892f968a641dd2"},{url:"/_next/static/chunks/8243.fc275f4ef7e574f3.js",revision:"fc275f4ef7e574f3"},{url:"/_next/static/chunks/8273.2e58683ac5132b09.js",revision:"2e58683ac5132b09"},{url:"/_next/static/chunks/8374.c5f404ed15b358b0.js",revision:"c5f404ed15b358b0"},{url:"/_next/static/chunks/8385.633ba3cafb18a692.js",revision:"633ba3cafb18a692"},{url:"/_next/static/chunks/8414.982fb9c4a368a75b.js",revision:"982fb9c4a368a75b"},{url:"/_next/static/chunks/8427.50bbb10460009d1c.js",revision:"50bbb10460009d1c"},{url:"/_next/static/chunks/846.ab72675f2d14eccb.js",revision:"ab72675f2d14eccb"},{url:"/_next/static/chunks/8504.e12266979b414a0d.js",revision:"e12266979b414a0d"},{url:"/_next/static/chunks/8506.a7bec8520a335936.js",revision:"a7bec8520a335936"},{url:"/_next/static/chunks/8536.fb16247b47578e7a.js",revision:"fb16247b47578e7a"},{url:"/_next/static/chunks/8595.c4059b7277cde949.js",revision:"c4059b7277cde949"},{url:"/_next/static/chunks/8611.4c3289440679d853.js",revision:"4c3289440679d853"},{url:"/_next/static/chunks/8699.33b155170185fc26.js",revision:"33b155170185fc26"},{url:"/_next/static/chunks/8718.fb3cfc8bcc4505f0.js",revision:"fb3cfc8bcc4505f0"},{url:"/_next/static/chunks/8747.4d906f1107c0bc07.js",revision:"4d906f1107c0bc07"},{url:"/_next/static/chunks/8888.809670380b238756.js",revision:"809670380b238756"},{url:"/_next/static/chunks/890.ad8cffecf9abae13.js",revision:"ad8cffecf9abae13"},{url:"/_next/static/chunks/8915.71640a777ff7d3dc.js",revision:"71640a777ff7d3dc"},{url:"/_next/static/chunks/8923.e5ae2c362a4c7a08.js",revision:"e5ae2c362a4c7a08"},{url:"/_next/static/chunks/8943.ec1bea40a1ea1587.js",revision:"ec1bea40a1ea1587"},{url:"/_next/static/chunks/895.31bbbd07ae995ad3.js",revision:"31bbbd07ae995ad3"},{url:"/_next/static/chunks/9018.226615b833f0af7b.js",revision:"226615b833f0af7b"},{url:"/_next/static/chunks/9024.7b2c00860ad59aa0.js",revision:"7b2c00860ad59aa0"},{url:"/_next/static/chunks/9078.e1c08420e5c5abdc.js",revision:"e1c08420e5c5abdc"},{url:"/_next/static/chunks/9091.b8fd96f52f3858ab.js",revision:"b8fd96f52f3858ab"},{url:"/_next/static/chunks/9110.cbd31988bf1d6717.js",revision:"cbd31988bf1d6717"},{url:"/_next/static/chunks/9112.3baca8f91992e033.js",revision:"3baca8f91992e033"},{url:"/_next/static/chunks/9179.4b979c92aba4c749.js",revision:"4b979c92aba4c749"},{url:"/_next/static/chunks/9193.370c893ebf054fc5.js",revision:"370c893ebf054fc5"},{url:"/_next/static/chunks/9199.44e16a942a3f3798.js",revision:"44e16a942a3f3798"},{url:"/_next/static/chunks/922.d2fac8bb011e7a6c.js",revision:"d2fac8bb011e7a6c"},{url:"/_next/static/chunks/9236.e3954da7710fba0a.js",revision:"e3954da7710fba0a"},{url:"/_next/static/chunks/9298.c944727729eec594.js",revision:"c944727729eec594"},{url:"/_next/static/chunks/9341.862484756e71ea63.js",revision:"862484756e71ea63"},{url:"/_next/static/chunks/9420.b1631cd7a15341d4.js",revision:"b1631cd7a15341d4"},{url:"/_next/static/chunks/9431.56df48d9f1dea551.js",revision:"56df48d9f1dea551"},{url:"/_next/static/chunks/9457.972438b8bab105d7.js",revision:"972438b8bab105d7"},{url:"/_next/static/chunks/9466.eaa5f0dbc26d3ecf.js",revision:"eaa5f0dbc26d3ecf"},{url:"/_next/static/chunks/9516.18269f58cb61b693.js",revision:"18269f58cb61b693"},{url:"/_next/static/chunks/9547.bf964cf648e30452.js",revision:"bf964cf648e30452"},{url:"/_next/static/chunks/9557.7f183428382fa8cb.js",revision:"7f183428382fa8cb"},{url:"/_next/static/chunks/9559.011b470ad0c9870d.js",revision:"011b470ad0c9870d"},{url:"/_next/static/chunks/9574.e176f5352fdf0098.js",revision:"e176f5352fdf0098"},{url:"/_next/static/chunks/9597.a5a2271b1ca8fa57.js",revision:"a5a2271b1ca8fa57"},{url:"/_next/static/chunks/9713.be1c915eede95b09.js",revision:"be1c915eede95b09"},{url:"/_next/static/chunks/9794.9ccb2af0ae77ec3f.js",revision:"9ccb2af0ae77ec3f"},{url:"/_next/static/chunks/9821.783b3ac9889fa359.js",revision:"783b3ac9889fa359"},{url:"/_next/static/chunks/9859.69cde5f4d17402ba.js",revision:"69cde5f4d17402ba"},{url:"/_next/static/chunks/990.3296251e96014b41.js",revision:"3296251e96014b41"},{url:"/_next/static/chunks/9910.8aa45d79d0c377f7.js",revision:"8aa45d79d0c377f7"},{url:"/_next/static/chunks/9921.61faf71f83eba597.js",revision:"61faf71f83eba597"},{url:"/_next/static/chunks/9955.494da6aeccaa8cdc.js",revision:"494da6aeccaa8cdc"},{url:"/_next/static/chunks/framework-9cf46cf0fe8d1146.js",revision:"9cf46cf0fe8d1146"},{url:"/_next/static/chunks/main-36b0594ce46fb801.js",revision:"36b0594ce46fb801"},{url:"/_next/static/chunks/pages/_app-3a77c03eb62469e2.js",revision:"3a77c03eb62469e2"},{url:"/_next/static/chunks/pages/_error-d39607a4676a4aa5.js",revision:"d39607a4676a4aa5"},{url:"/_next/static/chunks/pages/downloads-8dd35e14df5f3453.js",revision:"8dd35e14df5f3453"},{url:"/_next/static/chunks/pages/index-205d893f6b14fe98.js",revision:"205d893f6b14fe98"},{url:"/_next/static/chunks/pages/webmap-498eb01b8222f482.js",revision:"498eb01b8222f482"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-d06082433e290a3b.js",revision:"d06082433e290a3b"},{url:"/_next/static/css/06b8698e97c8e9de.css",revision:"06b8698e97c8e9de"},{url:"/_next/static/css/3807289dee565c61.css",revision:"3807289dee565c61"},{url:"/_next/static/css/6cdd0d275f65f968.css",revision:"6cdd0d275f65f968"},{url:"/_next/static/css/a06cbcb562462a0b.css",revision:"a06cbcb562462a0b"},{url:"/_next/static/gcRc_TGi8Ga4ShGC7wXms/_buildManifest.js",revision:"67999b12559a0c2083ab04894781f188"},{url:"/_next/static/gcRc_TGi8Ga4ShGC7wXms/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/gcRc_TGi8Ga4ShGC7wXms/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/_head.html",revision:"5b7c9ec85076defcc1242542c84093f6"},{url:"/icons/icon-144x144.png",revision:"a981e99cff624a8b477d2b33874d68b7"},{url:"/icons/icon-192x192.png",revision:"02b041b237ad1e6e4485e3cbc1643c9d"},{url:"/icons/icon-36x36.png",revision:"5fedf0a4f282e8b65a3c4ee72d3eb77a"},{url:"/icons/icon-48x48.png",revision:"f8e631e757571b4433d4de8c665f9f7d"},{url:"/icons/icon-512x512.png",revision:"a42497c9c825cde36d9e51d0e0dc9ebe"},{url:"/icons/icon-72x72.png",revision:"356dab40b448c93f66e12ff47b0a209b"},{url:"/icons/icon-96x96.png",revision:"c2814137a5d8ae5ac01116affb80801e"},{url:"/icons/maskable.png",revision:"a42497c9c825cde36d9e51d0e0dc9ebe"},{url:"/manifest.json",revision:"173d4ba923778da3b97f753a4dd2e9a8"},{url:"/tiles.json",revision:"663e7eb5c1642bcdb0dc56e0dddc64b7"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"},{url:"/zip/1-5.zip",revision:"638d73a82620d279ef1e106176144051"},{url:"/zip/104.zip",revision:"6097283828ad3d2010c402220ac58a1e"},{url:"/zip/94.zip",revision:"1b2f70ca192ef67ffa9e66fd639a15bc"},{url:"/zip/94_BK.zip",revision:"f2c3a0118850428bc11b987882d637b0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
