import './chatList.css';
import { Link } from 'react-router-dom';

const ChatList = () => {
  return (
    <div className='chatList'>
      <span className='title'>DASHBOARD</span>
      <Link to='/dashboard'>Create a new chat</Link>
      <Link to='/'>Explore Adiros AI 🤓</Link>
      <Link to='/dashboard'>Contact Us</Link>
      <hr />
      <div className='list'>
        <Link to='/chat/1' className='listItem'>
          Title for chat 1
        </Link>
        <Link to='/chat/2' className='listItem'>
          Title for chat 2
        </Link>
        <Link to='/chat/3' className='listItem'>
          Title for chat 3
        </Link>
        <Link to='/chat/4' className='listItem'>
          Title for chat 4
        </Link>
        <Link to='/chat/5' className='listItem'>
          Title for chat 5
        </Link>
        <Link to='/chat/6' className='listItem'>
          Title for chat 6
        </Link>
        <Link to='/chat/7' className='listItem'>
          Title for chat 7
        </Link>
        <Link to='/chat/8' className='listItem'>
          Title for chat 8
        </Link>
        <Link to='/chat/9' className='listItem'>
          Title for chat 9
        </Link>
        <Link to='/chat/10' className='listItem'>
          Title for chat 10
        </Link>
      </div>
      <hr />
      <div className='upgrade'>
        <svg
          data-logo='logo'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 170 40'
        >
          <g style={{ opacity: 1 }} id='logogram' transform='translate(0, 0)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M23.5342 4.3629C24.926 2.97124 27.1824 2.97124 28.5742 4.3629C29.966 5.75467 29.966 8.01113 28.5742 9.4029L20.0891 17.888C17.653 14.6231 17.9176 9.97964 20.8831 7.01419L23.5342 4.3629Z'
              fill='#5D2AEA'
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M35.6642 23.5067C37.0562 24.8983 37.0562 27.1549 35.6642 28.5465C34.2732 29.9383 32.0164 29.9383 30.6246 28.5465L22.1396 20.0616C25.4045 17.6254 30.0479 17.89 33.0134 20.8554L35.6642 23.5067Z'
              fill='#8281D5'
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M16.5207 35.6369C15.129 37.0287 12.8725 37.0287 11.4808 35.6369C10.0891 34.2452 10.0891 31.9887 11.4808 30.597L19.9658 22.112C22.402 25.3769 22.1374 30.0203 19.172 32.9857L16.5207 35.6369Z'
              fill='#4F4E4A'
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M4.39057 16.4932C2.9988 15.1015 2.9988 12.845 4.39057 11.4533C5.78233 10.0615 8.03876 10.0615 9.43053 11.4533L17.9156 19.9383C14.6507 22.3745 10.0072 22.1098 7.04183 19.1445L4.39057 16.4932Z'
              fill='#8E4FEE'
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M21.6381 34.5978C23.6903 32.3161 24.6441 29.3965 24.4994 26.5219L28.5744 30.5969C28.5845 30.607 28.5948 30.6172 28.605 30.6273V33.5366C28.605 35.5048 27.0094 37.1003 25.0412 37.1003C23.4426 37.1003 22.0898 36.0477 21.6381 34.5978Z'
              fill='#4F69EE'
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M5.42963 21.6104C7.71123 23.6627 10.6308 24.6165 13.5054 24.4718L9.43053 28.5468C9.4203 28.5569 9.41017 28.5672 9.40014 28.5773H6.49085C4.52264 28.5774 2.92709 26.9817 2.92709 25.0135C2.92709 23.415 3.97969 22.0621 5.42963 21.6104Z'
              fill='#4F9E91'
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M34.6252 18.3896C32.3438 16.3374 29.4242 15.3836 26.5496 15.5282L30.6245 11.4533C30.6347 11.4432 30.6448 11.4329 30.6549 11.4227H33.5643C35.5328 11.4227 37.1283 13.0183 37.1283 14.9865C37.1283 16.5852 36.0753 17.938 34.6252 18.3896Z'
              fill='#345298'
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M18.417 5.40207C16.3648 7.68369 15.4111 10.6033 15.5557 13.478L11.4808 9.40299C11.4705 9.39286 11.4604 9.38274 11.4502 9.37261V6.46329C11.4502 4.49508 13.0457 2.89944 15.0139 2.89944C16.6126 2.89944 17.9653 3.95214 18.417 5.40207Z'
              fill='#918E88'
            ></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15.0141 0C11.4446 0 8.55081 2.89375 8.55081 6.46332V7.7204C6.40328 7.1593 4.0233 7.72009 2.3404 9.40299C-0.183694 11.9271 -0.183694 16.0194 2.3404 18.5435L3.22924 19.4324C1.31398 20.5542 0.02771 22.6336 0.02771 25.0135C0.02771 28.5831 2.92146 31.4768 6.49103 31.4768H7.74801C7.18691 33.6243 7.74772 36.0043 9.43061 37.6871C11.9547 40.2112 16.0471 40.2112 18.5712 37.6871L21.2223 35.0359C23.5611 32.6972 24.6534 29.5839 24.4993 26.5218L28.5744 30.5968C31.0985 33.1209 35.1909 33.1209 37.7151 30.5968C40.2393 28.0727 40.2393 23.9803 37.7151 21.4563L36.8266 20.5676C38.7411 19.4458 40.0277 17.3664 40.0277 14.9865C40.0277 11.4169 37.1335 8.52318 33.5643 8.52318H32.3072C32.8684 6.37557 32.3075 3.99559 30.6246 2.31269C28.1006 -0.211402 24.0083 -0.211402 21.4842 2.31269L18.8329 4.96395C16.4941 7.3027 15.4018 10.4159 15.556 13.478L11.481 9.40299C11.4707 9.39286 11.4606 9.38273 11.4504 9.3726V6.46332C11.4504 4.49511 13.0459 2.89956 15.0141 2.89956C16.6128 2.89956 17.9655 3.95217 18.4172 5.4021C18.5511 5.25327 18.6896 5.10716 18.8328 4.96395L20.5952 3.20153C19.4734 1.28627 17.394 0 15.0141 0ZM30.655 11.4227C30.6449 11.4329 30.6348 11.4431 30.6246 11.4532L26.5497 15.5281C29.4244 15.3835 32.3439 16.3373 34.6253 18.3896C36.0755 17.9379 37.1285 16.5851 37.1285 14.9865C37.1285 13.0183 35.5329 11.4227 33.5643 11.4227H30.655ZM9.40012 28.5772C9.41025 28.567 9.42038 28.5568 9.43061 28.5467L13.5055 24.4716C10.6309 24.6164 7.71141 23.6625 5.42981 21.6104C3.97987 22.0621 2.92718 23.4148 2.92718 25.0135C2.92718 26.9817 4.52282 28.5772 6.49103 28.5772H9.40012ZM5.31869 21.5091C5.20808 21.4069 5.09907 21.3021 4.99166 21.1947V21.1948C5.09907 21.3022 5.20808 21.4069 5.31869 21.5091ZM25.0412 40C22.6612 40 20.5818 38.7136 19.46 36.7984L21.2223 35.0359C21.3656 34.8927 21.5041 34.7466 21.638 34.5978C22.0897 36.0477 23.4424 37.1004 25.0412 37.1004C27.0094 37.1004 28.605 35.5049 28.605 33.5367V30.6274C29.4401 31.4516 30.444 32.0024 31.5045 32.2795V33.5367C31.5045 37.1063 28.6108 40 25.0412 40ZM28.5744 4.36294C27.1826 2.97127 24.9262 2.97127 23.5344 4.36294L20.8832 7.01418C17.9178 9.97963 17.6531 14.6231 20.0893 17.888L28.5744 9.40289C29.9661 8.01112 29.9661 5.7547 28.5744 4.36294ZM35.6643 28.5466C37.0563 27.1548 37.0563 24.8984 35.6643 23.5066L33.0133 20.8553C30.048 17.89 25.4044 17.6253 22.1395 20.0615L30.6246 28.5466C32.0164 29.9383 34.2733 29.9383 35.6643 28.5466ZM16.5208 35.6369C15.1291 37.0286 12.8726 37.0286 11.4809 35.6369C10.0892 34.2451 10.0892 31.9887 11.4809 30.5969L19.9659 22.1118C22.4021 25.3767 22.1374 30.0203 19.1721 32.9856L16.5208 35.6369ZM4.39065 11.4532C2.99898 12.845 2.99898 15.1014 4.39065 16.4932L7.0419 19.1445C10.0074 22.1098 14.6508 22.3745 17.9157 19.9383L9.43061 11.4532C8.03885 10.0616 5.78241 10.0616 4.39065 11.4532Z'
              fill='#3D3A2C'
            ></path>
          </g>
          <g
            style={{ opacity: 1 }}
            id='logotype'
            transform='translate(45, 9.5)'
          >
            <path
              fill='#b46dee'
              d='M24.40 19.83L21.70 20.91L19.28 14.71L9.24 14.71L6.82 20.85L4.31 19.83L12.80-1.10L16.03-1.10L24.40 19.83ZM14.26 1.81L10.17 12.23L18.32 12.23L14.26 1.81ZM32.27 20.97L32.27 20.97Q30.29 20.97 28.64 19.95Q27.00 18.93 26.04 17.05Q25.08 15.18 25.08 12.63L25.08 12.63Q25.08 10.18 26.06 8.26Q27.03 6.34 28.66 5.22Q30.29 4.11 32.24 4.11L32.24 4.11Q33.85 4.11 35.02 4.76Q36.18 5.41 36.83 6.09L36.83 6.09L36.83-2.34L39.62-2.34L39.62 16.69Q39.62 17.87 40.19 18.23Q40.77 18.59 41.45 18.59L41.45 18.59L40.86 20.76Q37.91 20.76 37.26 18.40L37.26 18.40Q36.58 19.36 35.36 20.17Q34.13 20.97 32.27 20.97ZM32.89 18.49L32.89 18.49Q34.04 18.49 35.08 17.95Q36.12 17.41 36.83 16.54L36.83 16.54L36.83 8.54Q36.24 7.80 35.19 7.16Q34.13 6.53 32.86 6.53L32.86 6.53Q31.37 6.53 30.26 7.33Q29.14 8.14 28.54 9.49Q27.93 10.84 27.93 12.54L27.93 12.54Q27.93 14.25 28.58 15.59Q29.23 16.94 30.37 17.72Q31.50 18.49 32.89 18.49ZM46.94 20.60L44.14 20.60L44.14 4.48L46.94 4.48L46.94 20.60ZM45.54 1.72L45.54 1.72Q44.73 1.72 44.16 1.13Q43.59 0.54 43.59-0.23L43.59-0.23Q43.59-1.13 44.11-1.66Q44.64-2.18 45.54-2.18L45.54-2.18Q46.35-2.18 46.92-1.61Q47.49-1.04 47.49-0.23L47.49-0.23Q47.49 0.64 46.97 1.18Q46.44 1.72 45.54 1.72ZM53.66 20.60L50.87 20.60L50.87 4.48L53.57 4.48L53.57 7.98Q53.97 6.96 54.65 6.08Q55.34 5.19 56.36 4.65Q57.38 4.11 58.75 4.11L58.75 4.11Q59.21 4.11 59.68 4.15Q60.14 4.20 60.45 4.29L60.45 4.29L59.61 7.18Q59.02 6.93 58.22 6.93L58.22 6.93Q57.07 6.93 56.03 7.58Q54.99 8.23 54.33 9.60Q53.66 10.96 53.66 13.07L53.66 13.07L53.66 20.60ZM68.08 20.97L68.08 20.97Q65.78 20.97 63.95 19.90Q62.12 18.83 61.09 16.93Q60.05 15.02 60.05 12.54L60.05 12.54Q60.05 9.94 61.10 8.05Q62.16 6.15 63.98 5.13Q65.81 4.11 68.08 4.11L68.08 4.11Q70.34 4.11 72.15 5.13Q73.97 6.15 75.04 8.03Q76.11 9.91 76.11 12.48L76.11 12.48Q76.11 15.05 75.05 16.96Q74.00 18.86 72.18 19.92Q70.37 20.97 68.08 20.97ZM68.08 18.49L68.08 18.49Q70.53 18.49 71.89 16.83Q73.25 15.18 73.25 12.54L73.25 12.54Q73.25 10.93 72.57 9.58Q71.89 8.23 70.73 7.41Q69.56 6.59 68.08 6.59L68.08 6.59Q65.63 6.59 64.26 8.20Q62.90 9.81 62.90 12.48L62.90 12.48Q62.90 14.09 63.58 15.47Q64.26 16.85 65.43 17.67Q66.59 18.49 68.08 18.49ZM83.14 20.97L83.14 20.97Q81.31 20.97 79.84 20.51Q78.37 20.04 77.41 19.30L77.41 19.30L78.59 16.97Q79.39 17.66 80.62 18.10Q81.84 18.55 83.24 18.55L83.24 18.55Q84.97 18.55 85.86 17.98Q86.74 17.41 86.74 16.51L86.74 16.51Q86.74 15.86 86.41 15.36Q86.09 14.87 85.22 14.38Q84.35 13.90 82.71 13.35L82.71 13.35Q80.45 12.57 79.31 11.50Q78.18 10.43 78.18 8.54L78.18 8.54Q78.18 6.68 79.81 5.39Q81.44 4.11 84.32 4.11L84.32 4.11Q85.87 4.11 87.08 4.43Q88.29 4.76 89.25 5.26L89.25 5.26L88.47 7.55Q87.64 7.05 86.57 6.74Q85.50 6.43 84.20 6.43L84.20 6.43Q82.58 6.43 81.75 7.08Q80.91 7.74 80.91 8.51L80.91 8.51Q80.91 9.25 81.56 9.78Q82.21 10.31 84.10 10.93L84.10 10.93Q87.17 11.95 88.38 13.19Q89.59 14.43 89.59 16.29L89.59 16.29Q89.59 18.46 87.84 19.72Q86.09 20.97 83.14 20.97ZM118.48 19.83L115.79 20.91L113.37 14.71L103.32 14.71L100.91 20.85L98.39 19.83L106.89-1.10L110.11-1.10L118.48 19.83ZM108.35 1.81L104.25 12.23L112.41 12.23L108.35 1.81ZM123.50 20.60L120.56 20.60L120.56-1.10L123.50-1.10L123.50 20.60Z'
            ></path>
          </g>
        </svg>
        <div className='texts'>
          <span>Upgrade to Adiros AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
