import './App.scss';
import {useState} from "react";

function App() {

    const [mainTextValue, setMainTextValue] = useState()
    const [searchTerm, setSearchTerm] = useState('')
    const [searchOCount, setSearchOCount] = useState(0)

    const resetMainText = () => { setMainTextValue('') }

    const copyMainText = () => { navigator.clipboard.writeText(mainTextValue)  }

    const search = (event) => {
        const term = event.target.value
        setSearchTerm(term)
        if (!term) return
        const results = mainTextValue.matchAll(new RegExp(term, "g"))
        let i = 0
        for (let result of results) {
            console.log(result);
            i++
        }
        setSearchOCount(i)
    }

    return (
    <div className="App">
      <div className="header">
        <div className="search-sec">
            <input className="search-itext" type="text" placeholder="Search Term" onChange={search} />
            <button className="i-btn">Search</button>
            <div className="stats">
                { !searchTerm.length  ? null :
                    <div className="stats-txt">
                        <span className="oc-index">1</span>
                        <span className="oc-count">/ {searchOCount}</span>
                        <span className="main">occurences found</span>
                    </div>
                }
            </div>
        </div>
        <div className="replace-sec">
            <input className="search-itext" type="text" placeholder="Replace Term" />
            <button className="i-btn">Replace</button>
            <div className="stats">
                <div className="stats-txt">
                    <span className="oc-index">11</span>
                    <span className="oc-count"></span>
                    <span className="main">occorunces replaced</span>
                </div>
            </div>
        </div>
        <div className="text-action-buttons">
            <button className="tab-btn" onClick={resetMainText}>Reset Text</button>
            <button className="tab-btn" onClick={copyMainText}>Copy Text</button>
        </div>
      </div>
      <div className="main-text-section">
        <div className="text-scene ta-text-scene-common">
            <span>{mainTextValue}</span><span className='text-cursor'>|</span>
        </div>
        <textarea onChange={event => setMainTextValue(event.target.value)}
            className="ta ta-text-scene-common" placeholder="paste your text here"></textarea>
      </div>
    </div>
    );
}

export default App;
