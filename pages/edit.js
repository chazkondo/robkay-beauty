import Head from 'next/head'
import axios from 'axios'

import {useState} from 'react';
import dbConnect from '../utils/dbConnect';

import text from '../models/text';

export default function Edit(props) {

  const [intro, updateIntro] = useState(props.text.intro)
  const [caption1, updateCaption1] = useState(props.text.caption1)
  const [caption2, updateCaption2] = useState(props.text.caption2)

  function update(section, message) {
    axios.put('/api/data', {data: {section, message}})
      .then(()=>alert('Success'))
      .catch(()=>alert('ERROR!'))
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

  function update(section, message) {
    axios.put('/api/data', {data: {section, message}})
      .then(()=>alert('Success'))
      .catch(()=>alert('ERROR!'))
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', flexDirection: 'column'}}>
      <Head>
        <title>RBE</title>
        <meta name="description" content="RBE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <button style={{padding: 5}} onClick={()=>update("intro", intro)}>Save Changes</button>
      <br />
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
  