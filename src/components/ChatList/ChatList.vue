<script>
import { type ChatType } from '@/utils/types';
import ChatMessage from '@/components/ChatMessage';
import ChatFile from '@/components/ChatFile';
import ChatImage from '@/components/ChatImage';

export default {
  props: {
    list: Array/* ChatType[] */,
  },
  render() {
    return (
      <div class="chat-list">
        {
          this.list.map((o:ChatType) => {
            let child = null;
            if (o.type === 'message') {
              child = <span>{o.message}</span>;
            } else if (o.type === 'file') {
              child = <ChatFile fileName={o.fileName} fileSize={o.fileSize} />;
            } else if (o.type === 'image') {
              child = <ChatImage src={o.image} />;
            } else if (o.type === 'emoticon') {
              child = <span class={`sprite ${o.emoticon}`} />;
            }
            const clazz = {
              'chat-list-item': true,
              right: !o.me,
            };
            return (
              <div class={clazz} key={o.id}>
                <ChatMessage dark={!o.me}>{child}</ChatMessage>
              </div>
            );
          })
        }
      </div>
    );
  },
};
</script>


<style lang="stylus">
.chat-list
  padding-right 10px
  .chat-list-item
    margin-bottom 24px
    &.right
      display flex
      justify-content flex-end
</style>