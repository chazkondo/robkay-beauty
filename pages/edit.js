import Head from 'next/head'
import axios from 'axios'

import {useState, useEffect} from 'react';
import dbConnect from '../utils/dbConnect';

import text from '../models/text';
import { useRouter } from 'next/router'

export default function Edit(props) {
  const router = useRouter()
  const [intro, updateIntro] = useState(props.text.intro)
  const [caption1, updateCaption1] = useState(props.text.caption1)
  const [caption2, updateCaption2] = useState(props.text.caption2)
  const [passwordDiv, setPasswordDiv] = useState(true)

  const [usernameValue, setUsernameValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [passwordIsDisabled, disablePasswordInput] = useState(false)

  useEffect(()=>{
    if (passwordValue.length === 12) {
    disablePasswordInput(true)
    axios
      .post(`/api/validate`, {
        username: usernameValue,
        password: passwordValue,
      })
      .then((res) => {
        if (res.data.success) {
          setPasswordDiv(false)
          disablePasswordInput(false)
        }
      })
      .catch((err) => {
        alert('Sorry an error occurred.')
        disablePasswordInput(false)
      })
    }
  },[passwordValue])

  function update() {
     axios.put('/api/changeInfo', {data: {
        intro: intro,
        caption1: caption1,
        caption2: caption2
    }})
      .then(res => {
        alert('Update Successful. Please wait a few minutes for changes to refresh.');
        router.push('/')
      })
      .catch(()=>alert('An error occurred.'))
  }

  function updateIntroFunction(event) {
    updateIntro(event.target.value);
  }

  function updateCaption1Function(event) {
    updateCaption1(event.target.value);
  }

  function updateCaption2Function(event) {
    updateCaption2(event.target.value);
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', flexDirection: 'column'}}>
      <Head>
        <title>RBE</title>
        <meta name="description" content="RBE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {passwordDiv ? <div>
        <form action="/" style={{display: 'flex', flexDirection: 'column'}}>
          <input autoFocus type="text" placeholder={'Enter Username'} onChange={(e) => setUsernameValue(e.target.value)} value={usernameValue} disabled={passwordIsDisabled}/>
          <br />
          <input type="password" placeholder={'Enter Password'} onChange={(e) => setPasswordValue(e.target.value)} value={passwordValue} disabled={passwordIsDisabled}/>
        </form>
      </div> : 
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
      <h1>
      Intro: 
    </h1>
    <textarea name="text" rows="14" cols="10" wrap="soft" style={{width: '75%', height: '14%', padding: 5, wordWrap: 'break-word'}} type="text" value={intro} onChange={e => updateIntroFunction(e)} />
    <br />
    <h1>
        Caption 1: 
    </h1>
    <textarea name="text" rows="14" cols="10" wrap="soft" style={{width: '75%', height: '14%', padding: 5}} type="text" value={caption1} onChange={e => updateCaption1Function(e)} />
    <br />
    <h1>
        Caption 2: 
    </h1>
    <textarea name="text" rows="14" cols="10" wrap="soft" style={{width: '75%', height: '14%', padding: 5}} type="text" value={caption2} onChange={e => updateCaption2Function(e)} />
    <br />
    <button style={{padding: 5}} onClick={()=>update()}>Save Changes</button>
    <br />
    </div>
      }

    </div>
  )
}

export async function getStaticProps(context) {

    dbConnect();
    const pageText = await text.find({_id: process.env.DATA_ID});
    return {
      props: {
        text: JSON.parse(JSON.stringify(pageText[0]))
      }
    }
  }
  