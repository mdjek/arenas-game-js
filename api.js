class Api {
  getRequest = async (url, options = {}) => {
    return await fetch(url, options).then(response => response.json())
  }

  postRequest = async (url, data) => {
    return await fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify({
          ...data
        })
      }
    ).then(response => response.json())
  }

  fetchPlayerList = () => {
    return this.getRequest('https://reactmarathon-api.herokuapp.com/api/mk/players');
  }

  getRandomPlayer = () => {
    return this.getRequest('https://reactmarathon-api.herokuapp.com/api/mk/player/choose');
  }

  fightStep = ({ hit, defence }) => {
    return this.postRequest(
      'http://reactmarathon-api.herokuapp.com/api/mk/player/fight',
      {
        hit,
        defence
      }
    )
  }
}

export { Api };
