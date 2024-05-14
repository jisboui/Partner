import  { getRoom, addRoom, updateRoom, deleteRoom, getRoomById, getRoomCalendar }  from "@/services/room.service";


export default {
 namespaced: true,
 state : {
  room: [],
  roomP: null,
  roomPUT: null,
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
  selectRoom({ commit }) {
    return getRoom()
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

  createRoom(_, roomP) {
    return addRoom(roomP)
      .then(response => {
        console.log("post room response from the action : ", response);
      })
      .catch(error => {
        console.error("post room error:", error);
        return Promise.reject(error);
      });
  },

  deleteroom(_, { id }) {
    return deleteRoom(id)
      .then(response => {
        console.log("Delete room action response: ", response);
      })
      .catch(error => {
        console.error("Delete room action error: ", error);
        return Promise.reject(error);
      });
  },

  updateroom(_, { id, roomPUT }) {
    return updateRoom(id, roomPUT)
      .then(response => {
        console.log("Update room action response: ", response);
      })
      .catch(error => {
        console.error("Update room action error: ", error);
        return Promise.reject(error);
      });
  },
    selectRoomById(_, { id }) {
        return getRoomById(id)
        .then(response => {
            console.log("roomGetID response from the action : ", response);
            return response;
        })
        .catch(error => {
            console.error("roomGetID error:", error);
            return Promise.reject(error);
        });
    },
    selectRoomCalendar({commit}) {
        return getRoomCalendar()
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
