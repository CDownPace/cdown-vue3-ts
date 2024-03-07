<template>
  <nav-bar />
  <div class="padding16 feed-back">
    <div>
      <van-field v-model="form.categoryText" is-link readonly required label="类别" placeholder="请选择"
        @click="showCategoryPicker = true" />
      <van-popup v-model:show="showCategoryPicker" round position="bottom">
        <picker :columns="FEEDBACK_CATEGORY" @cancel="showCategoryPicker = false" @confirm="handleCategorySelect" />
      </van-popup>
    </div>
    <div>
      <van-field v-model="form.moduleText" is-link readonly required label="模块" placeholder="请选择"
        @click="showModulePicker = true" />
      <van-popup v-model:show="showModulePicker" round position="bottom">
        <picker :columns="FEEDBACK_MODULE" @cancel="showModulePicker = false" @confirm="handleModuleSelect" />
      </van-popup>
    </div>
    <div class="opinion-box">
      <div class="feed-back-title feed-back-title-required">反馈意见</div>
      <van-field v-model="form.content" type="textarea" placeholder="请输入" rows="6" maxlength="140" autosize />
    </div>
    <div class="attachment">
      <div class="feed-back-title">上传附件</div>
      <van-uploader v-model="fileList" accept=".png, .jpg, .jpeg, .mp4, .pdf, .mov" :preview-full-image="false"
        :max-count="5" :max-size="10485760" :after-read="onUpload" @oversize="onOversize" />
      <div class="tips">
        <div class="item">支持数量：5个以内</div>
        <div class="item">支持格式：PDF/图片/MP4</div>
        <div class="item">支持大小：文件 {{ '<' }} 10M</div>
        </div>
      </div>
      <div class="button-group">
        <van-button type="default"> 取消 </van-button>
        <van-button type="primary" :disabled="!canSubmit" @click="handleConfirm"> 确认 </van-button>
      </div>
      <father></father>
    </div>
</template>
  
<script setup lang="ts">
import Picker from '@/components/Picker.vue';
import { FEEDBACK_CATEGORY } from '../../constant/workflow';
import { FEEDBACK_MODULE } from '../../constant/workflow';
import { showLoadingToast, showToast } from 'vant';
import { ref, computed } from 'vue'
import { getGoodsList } from '@/request/getData'
import Father from '@/components/Father.vue'

interface IFileList {
  pictureName?: string;
  pictureUrl?: string;

}
interface IFrom {
  fileList?: IFileList[];
  category?: string;
  categoryText?: string;
  module?: string;
  moduleText?: string;
  content?: string
}
const form = ref<IFrom>(
  {
    fileList: [],
    category: '',
    categoryText: '',
    module: '',
    moduleText: '',
    content: ''
  }
)
const showCategoryPicker = ref(false)
const showModulePicker = ref(false)
const fileList: any = ref();

const onUpload = async (file: any) => {
  console.log('change 6')
  const loading = showLoadingToast({
    message: '上传中...',
    forbidClick: true,
    duration: 0,
  });
  console.log(file.file.name, file.file.type);
  const formData = new FormData();
  formData.append('file', file.file);

  loading.close();
};

const handleCategorySelect = (e: any) => {
  form.value.category = e.selectedOptions[0].value;
  form.value.categoryText = e.selectedOptions[0].text;
  showCategoryPicker.value = false;
};
const handleModuleSelect = (e: any) => {
  form.value.module = e.selectedOptions[0].value;
  form.value.moduleText = e.selectedOptions[0].text;
  showModulePicker.value = false;
}
const onOversize = () => {
  showToast('文件大小不能超过 10M');
};
const canSubmit = computed(() => {
  return form.value.category && form.value.module && form.value.content;
});
const handleConfirm = async () => {
  const loading = showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    duration: 0,
  });
  console.log('fileList', fileList)
  getGoodsList({
    page: 1,
    size: 20,
  })
  // form.value.fileList = fileList.value.map((item: { pictureName: string; pictureUrl: string; }) => ({
  //   pictureName: item.pictureName,
  //   pictureUrl: item.pictureUrl,
  // }));
  loading.close();
}
</script>
  
<style lang="scss" scoped>
.feed-back {
  .feed-back-title {
    line-height: 50px;
    height: 50px;
    background-color: #ffffff;
    padding: 0 4px;
  }

  .feed-back-title-required {
    &:before {
      content: '*';
      color: #e74106;
      margin-right: 2px;
    }
  }

  .attachment {
    background-color: #ffffff;
    padding: 8px 4px;
    display: flex;
    flex-direction: column;

    img {
      margin-right: 4px;
    }

    .tips {
      color: rgba(0, 0, 0, 0.25);
      font-size: 12px;
      font-weight: 400;

      .item {
        position: relative;
        padding-left: 12px;
      }

      .item:before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        position: absolute;
        top: 50%;
        left: 4px;
        transform: translate(-50%, -50%);
      }
    }
  }

  ::v-deep(.opinion-box .van-cell) {
    border: 1px solid #dcdfe6;
    margin: 0;
    border-radius: 2px;
  }

  .button-group {
    padding: 12px;
    display: flex;

    button {
      flex: 1;
    }
  }
}
</style>
  