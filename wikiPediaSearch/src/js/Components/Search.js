import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('react');
    const [results, setResults] = useState([]);

    useEffect(() => {
        // We cannot pass async functions to useEffect. We can work around this by setting a varialble and calling it within the function.
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        };

        if (term && !results.length) {
            search();
        } else {
            const timer = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 500)
        }

        return () => {
            clearTimeout(timer)
        }

    }, [term])

    const renderedResults = results.map((item) => {
        return (
            <div key={item.pageid} className="item">
                <div className="right floated content middle aligned">
                    <a href={`https://en.wikipedia.org?curid=${item.pageid}`}
                        className="ui button">
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {item.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                    <div className="ui divided list">
                        {renderedResults}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;