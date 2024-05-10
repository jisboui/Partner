import  { serviceroom, serviceroomP, serviceroomPU, serviceroomDe, serviceroomGetID, serviceroomGetCalendar }  from "@/services/room.service";


export default {
 namespaced: true,
 state : {
  room: [],
  roomP: null,
  roomPu: null,
  calendar: [],
},

 mutations : {
  setroom(state, room) {
    console.log('setting room in state:', room);
    state.room = room;
  },
  setroomCalendar(state, calendar) {
    console.log('setting roomCalendar in state:', calendar);
    state.calendar = calendar;
  }
},

 actions : {
  fetchroom({ commit }) {
    return serviceroom()
      .then(response => {
        commit('setroom', response);
        console.log("room response from the action : ", response);
        return response;
      })
      .catch(error => {
        console.error("room error:", error);
        return Promise.reject(error);
      });
  },

  postroom(_, roomP) {
    return serviceroomP(roomP)
      .then(response => {
        console.log("post room response from the action : ", response);
      })
      .catch(error => {
        console.error("post room error:", error);
        return Promise.reject(error);
      });
  },

  deleteroom(_, { id }) {
    return serviceroomDe(id)
      .then(response => {
        console.log("Delete room action response: ", response);
      })
      .catch(error => {
        console.error("Delete room action error: ", error);
        return Promise.reject(error);
      });
  },

  updateroom(_, { id, roomPU }) {
    return serviceroomPU(id, roomPU)
      .then(response => {
        console.log("Update room action response: ", response);
      })
      .catch(error => {
        console.error("Update room action error: ", error);
        return Promise.reject(error);
      });
  },
    fetchroomGetID(_, { id }) {
        return serviceroomGetID(id)
        .then(response => {
            console.log("roomGetID response from the action : ", response);
            return response;
        })
        .catch(error => {
            console.error("roomGetID error:", error);
            return Promise.reject(error);
        });
    },
    fetchroomGetCalendar({commit}) {
        return serviceroomGetCalendar()
        .then(response => {
            commit('setroomCalendar', response);
            console.log("roomGetCalendar response from the action : ", response);
            return response;
        })
        .catch(error => {
            console.error("roomGetCalendar error:", error);
            return Promise.reject(error);
        });
    },
},
};
