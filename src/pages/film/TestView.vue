<template>
    <div><template>
   <div >
       <dl class="m-categroy">
            <dt>按拼音字母选择：</dt>
            <!-- 大写拼音字母导航栏 -->
            <dd v-for="item in list" :key="item">
                <a :href="'#city'+item">
                    {{item}}
                </a>
            </dd>
       </dl>

       <dl v-for="item in blocks" :key="item.title" class="m-categroy-section">
           <!-- 左侧大写字母标签 -->
           <dt :id="'city'+item.title">
               {{item.title}}
           </dt>
           <!-- 右侧所属城市 -->
           <dd>
              <span v-for="c in item.city" :key="c">
                  {{c}}
              </span>
           </dd>
       </dl>
   </div>
</template>
    </div>
</template>

<script>
// import { reqCitiesList } from '../../api/index'
// import pyjs from 'js-pinyin'
export default {
  data () {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      blocks: []
    }
  }
  // async mounted () {
  //   const result = await reqCitiesList(8968387, {
  //     'X-Host': 'mall.film-ticket.city.list'
  //   })
  //   console.log(result)
  //   const self = this

  //   // const city = [
  //   //   {
  //   //     name: '北京',
  //   //     pinyin: 'beijin'
  //   //   },
  //   //   {
  //   //     name: '上海',
  //   //     pinyin: 'shanghai'
  //   //   },
  //   //   {
  //   //     name: '广东',
  //   //     pinyin: 'guangdong'
  //   //   },
  //   //   {
  //   //     name: '广西',
  //   //     pinyin: 'guangxi'
  //   //   }
  //   // ]
  //   const city = result.data.cities
  //   const blocks = []
  //   let p, c
  //   const d = {}
  //   city.forEach(item => {
  //     p = pyjs.getFullChars(item.name).toLocaleLowerCase().slice(0, 1)
  //     c = p.charCodeAt(0)
  //     if (c > 96 && c < 123) {
  //       if (!d[p]) {
  //         d[p] = []
  //       }
  //       d[p].push(item.name)
  //     }
  //   })
  //   for (const [k, v] of Object.entries(d)) {
  //     blocks.push({ title: k.toUpperCase(), city: v })
  //   }
  //   // console.log(blocks)
  //   blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
  //   console.log(blocks)
  //   self.blocks = blocks
  // }
  // if (c > 97 && c < 123) {
  // 小写的 a-z if (!d[p]) { d[p] = [] } d[p].push(item.name) } })
  // for(let [k, v] of Object.entries(d)) { blocks.push({ title: k.toUpperCase(), city: v }) }
  // blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
  // console.log(blocks)

}
</script>
