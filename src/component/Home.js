import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import AppContext from '../AppContext';
import Header from "./Header";

  export default function Home() {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        let mounted = true;
        if(mounted) {
            (async () => {
            const eve = await getEvents();
            setEvents(eve?.data);
        })();
        }
        return () => mounted = false;
      },[]);
      const getEvents = async () => {
        const ev =  await axios({
            method: 'get',
            url: 'https://rails-admin-api.herokuapp.com/events'
          });
          return ev;
      }
    return (
      <>
      <Header/>
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Events</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Event listing
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {
          events.map((event) => {
            return (
            <div key={event?.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                      <a>{event?.name}</a>
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                      {event?.date}
                  </p>
                </div>
                <div className="flex-1">
                  <Link to={`/events/${event?.id}`}>
                      Details
                  </Link>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
      </>
    )
  }
  