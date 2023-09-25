<template>
  <div>
    <label :for="id">
      <slot></slot>
    </label>
    <input style="display: none" @change="addFile($event)" type="file" multiple :id="id"
    :accept="accept">
  </div>
</template>
<script>
  export default {
    name: 'AddFile',
    props: {
        id: {
          required: true
        },
        accept: {
          type: String
        },
        multiple: {
          type: Boolean,
          default: false
        },
        avatar: {
          type: Boolean,
          default: false
        }
    },
    methods: {
      async addFile(event) {
        console.log(event);
        // let formData = new FormData()
        // formData.append('file', event.target.files[0])
        // formData.append('name', event.target.files[0].name)
        // if(this.avatar) {
        //   this.$emit('upload', formData)
        // } else {
        //     try {
        //       this.loading_alert() /* Открываем загрузечное модальное окно */
        //       const res = await this.$axios.post('/media-files', formData, {
        //         headers: {
        //           'Content-Type': 'multipart/form-data',
        //         }
        //       })
        //       this.success_alert() /* Открываем успешное модальное окно */
        //       this.$emit('upload', res.data.data, event.target.files[0])
        //     } catch(err) {
        //       this.error_alert(err.response.data.message) /* Открываем ошибочное модальное окно */
        //     }
        // }
      }
    },
  }
</script>
