<template>
  <div v-html="description"/>
</template>
<script>
export default {
  name: 'EditorComponent',
  props: {
    description: {}
  }
}
</script>
<style scoped>
::v-deep h1 {
  font-size: 32px;
}
::v-deep h2 {
  font-size: 24px;
}
::v-deep h3 {
  font-size: 19px;
}
::v-deep h4 {
  font-size: 16px;
}
::v-deep h5 {
  font-size: 13.2px;
}
::v-deep h6 {
  font-size: 10.72px;
}
::v-deep .ql-align-center {
  text-align: center;
}
::v-deep .ql-align-right {
  text-align: right;
}
::v-deep .ql-align-justify {
  text-align: justify;
}
::v-deep ul {
  list-style-type: disc;
  list-style-position: inside;
}
::v-deep ol {
  list-style-type: auto;
  list-style-position: inside;
}
::v-deep ol li {
  padding-left: 1.5em;
}
::v-deep a {
  color: #06c;
  text-decoration: underline;
}
</style>
