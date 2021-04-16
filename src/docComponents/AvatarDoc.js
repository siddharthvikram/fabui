import {Avatar} from '../components/Avatar'
import {CodeBox} from './codeBox'
export function AvatarDoc() {
      return(
          <div >
            <h1>Avatar</h1>
            <div className="avatarDocBox1">
              <Avatar src="https://i.insider.com/5c79a8cfeb3ce837863155f5?width=750&format=jpeg&auto=webp" classes="avatarSmall"/>
              <Avatar src="https://i.insider.com/5c79a8cfeb3ce837863155f5?width=750&format=jpeg&auto=webp" classes="avatarMedium"/>
              <Avatar src="https://i.insider.com/5c79a8cfeb3ce837863155f5?width=750&format=jpeg&auto=webp" classes="avatarLarge"/>  
            </div>

            <CodeBox>
              {`<Avatar src="https://i.insider.com/5c79a8cfeb3ce837863155f5?width=750&format=jpeg&auto=webp" classes="avatarSmall"/>`}
              <br/>
              {`<Avatar src="https://i.insider.com/5c79a8cfeb3ce837863155f5?width=750&format=jpeg&auto=webp" classes="avatarMedium"/>`}
              <br/>
              {`<Avatar src="https://i.insider.com/5c79a8cfeb3ce837863155f5?width=750&format=jpeg&auto=webp" classes="avatarLarge"/>`}
            </CodeBox>
            
                 

          </div> 
        )
      }
      export default AvatarDoc;