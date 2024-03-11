<template>
<br> <br> 
<h1 class="my-4 text-center">Mon historique d'opérations</h1>
<div class="table-responsive">
    <br> <br>
    <table class="table table-striped table-bordered">
        <thead class="thead-dark">
        <tr class="custom-row">
            <th>Role</th>
            <th>Horodatage</th>
            <th>Action</th>
            <th>Description</th>
            <!-- <th>Service Name</th>
            <th>Method Name</th> -->
            <th>Date de début</th>
           <!--  <th>End Time</th>
            <th>Duration</th>
            <th>Response Status</th> -->
        </tr>
        </thead>
        <tbody>
        <tr v-for="historic in historics.data" :key="historic.id" :value="historic.id">
            <td>{{ historic.role }}</td>
            <td>{{ formatTimestamp(historic.timestamp) }}</td>
            <td>{{ historic.action }}</td>
            <td>{{ historic.description }}</td>
            <!-- <td>{{ historic.serviceName }}</td>
            <td>{{ historic.methodName }}</td> -->
            <td>{{ formatTime(historic.startTime) }}</td>
            <!-- <td>{{ formatTime(historic.endTime) }}</td>
            <td>{{ historic.duration }} ms</td>
            <td>{{ historic.responseStatus }}</td> -->
        </tr>
        </tbody>
    </table>
</div>
</template>
  
<script>
export default {
data() {
    return {};
},
created() {
    this.$store.dispatch('historicNS/fetchHist');
},
beforeMount() {
    this.$store.state.layout = "default";
},
computed: {
    historics() {
    return this.$store.state.historicNS.hist;
    },
},
methods: {
    formatTimestamp(timestamp) { // Format the timestamp to a readable date
      return timestamp ? new Date(timestamp).toLocaleString('fr-FR') : '';
    },
    formatTime(time) { // Format the time to a readable time
    return time ? new Date(time).toLocaleTimeString('fr-FR') : '';
    },
},
};
</script>
  
<style scoped>
.custom-row {
  height: 65px;
}
.table {
margin : 30px;
width: 95%;
margin-bottom: 1rem;
color: #212529;
}

.table th, .table td {
padding: 0.75rem;
vertical-align: top;
border-top: 1px solid #dee2e6;
}

.table thead th {
vertical-align: bottom;
border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
border-top: 2px solid #dee2e6;
}

.table .table {
background-color: #fff;
}

.table-bordered {
border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
border: 1px solid #dee2e6;
}

.table-bordered thead th,
.table-bordered thead td {
border-bottom-width: 2px;
}
@media (max-width: 767px) {
    .table {
      width: 1% !important;
    }
  }
</style>
  