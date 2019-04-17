import axios from 'axios';
import { baseUrl, itemUrl } from '../shared/Url';

const JSON_QUERY = '.json?print=pretty';

const hackerNewsApi = {} ;

const PAGE_LIMIT = 20;

const getPageSlice = (limit, page = 0) => ({begin: page * limit}, {end: (page + 1) * limit});

const getPageValues = ({begin , end, items }) => items.slice(begin, end);

hackerNewsApi.getTopStoryIds = () => axios.get(baseUrl + `topstories${JSON_QUERY}`);

hackerNewsApi.getStory = id => axios.get(itemUrl + `${id}${JSON_QUERY}`);

hackerNewsApi.getStoriesByPage = (ids, page) => {
    const { begin, end} = getPageSlice (PAGE_LIMIT, page);  
    
    const activeIds = getPageValues({begin, end, ids});

    const storyPromises = activeIds.map(id => hackerNewsApi.get(id));

    return Promise.all(storyPromises);
};

export default hackerNewsApi;  