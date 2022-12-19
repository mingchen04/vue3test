<template>
  <div class="hello">
    <input type="file" @change="upex($event)" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      File: ""
    }
  },
  props: {
    msg: String
  },
  mounted() {},
  methods: {
    upex(event) {
      const data = new FormData();
      data.append("file", event.target.files[0]);

      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.responseType = 'blob';
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          let objectUrl = URL.createObjectURL(this.response)
          const a = document.createElement('a')
          a.download = this.getResponseHeader("Content-Disposition").split('filename=')[1]  //后缀名一定要写对，不然会导致文件损坏，打不开
          a.href = objectUrl;
          a.click();
          a.remove();
        }
      });

      xhr.open("POST", "http://10.0.1.7:8887/manager/shorturl/generate");
      xhr.send(data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
