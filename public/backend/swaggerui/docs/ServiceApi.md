# MilanoGreenBackEnd.ServiceApi

All URIs are relative to *https://milanogreen.herokuapp.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serviceGET**](ServiceApi.md#serviceGET) | **GET** /services | Service of MilanoGreen association
[**serviceServiceIdGET**](ServiceApi.md#serviceServiceIdGET) | **GET** /service/{serviceId} | Find the Service by its ID (identifier)
[**serviceServiceIdRelatedEventsGET**](ServiceApi.md#serviceServiceIdRelatedEventsGET) | **GET** /service/{serviceId}/related_events | Connect Service to its Events
[**serviceServiceIdRelatedPeopleGET**](ServiceApi.md#serviceServiceIdRelatedPeopleGET) | **GET** /service/{serviceId}/related_people | Connect Service to its People


<a name="serviceGET"></a>
# **serviceGET**
> [Service] serviceGET(opts)

Service of MilanoGreen association

All the specific Services provided by the Association MilanoGreen, they are characterized by a title and a description. Moreover, they have related Events and People in charge of them.

### Example
```javascript
var MilanoGreenBackEnd = require('milano_green_back_end');

var apiInstance = new MilanoGreenBackEnd.ServiceApi();

var opts = { 
  'limit': 56, // Number | Maximum number of displayable Services per page
  'offset': 56 // Number | Pagination offset, default is 0
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serviceGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Maximum number of displayable Services per page | [optional] 
 **offset** | **Number**| Pagination offset, default is 0 | [optional] 

### Return type

[**[Service]**](Service.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="serviceServiceIdGET"></a>
# **serviceServiceIdGET**
> Service serviceServiceIdGET(serviceId)

Find the Service by its ID (identifier)

Returns one of the specific 6 services, allows us to access a page of the specific service

### Example
```javascript
var MilanoGreenBackEnd = require('milano_green_back_end');

var apiInstance = new MilanoGreenBackEnd.ServiceApi();

var serviceId = 789; // Number | ID of service to be returned


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serviceServiceIdGET(serviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **Number**| ID of service to be returned | 

### Return type

[**Service**](Service.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="serviceServiceIdRelatedEventsGET"></a>
# **serviceServiceIdRelatedEventsGET**
> Event serviceServiceIdRelatedEventsGET(serviceId)

Connect Service to its Events

Get the events related to a service

### Example
```javascript
var MilanoGreenBackEnd = require('milano_green_back_end');

var apiInstance = new MilanoGreenBackEnd.ServiceApi();

var serviceId = 789; // Number | ID of the service


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serviceServiceIdRelatedEventsGET(serviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **Number**| ID of the service | 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="serviceServiceIdRelatedPeopleGET"></a>
# **serviceServiceIdRelatedPeopleGET**
> People serviceServiceIdRelatedPeopleGET(serviceId)

Connect Service to its People

Get the people related to a service

### Example
```javascript
var MilanoGreenBackEnd = require('milano_green_back_end');

var apiInstance = new MilanoGreenBackEnd.ServiceApi();

var serviceId = 789; // Number | ID of the service


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serviceServiceIdRelatedPeopleGET(serviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **Number**| ID of the service | 

### Return type

[**People**](People.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

