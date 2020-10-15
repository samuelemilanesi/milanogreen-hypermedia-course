# MilanoGreenBackEnd.EventApi

All URIs are relative to *https://milanogreen.herokuapp.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventEventIdGET**](EventApi.md#eventEventIdGET) | **GET** /event/{eventId} | Find the event by its ID (identifier)
[**eventEventIdRelatedServicesGET**](EventApi.md#eventEventIdRelatedServicesGET) | **GET** /event/{eventId}/related_services | Connect Event to its Services
[**eventsGET**](EventApi.md#eventsGET) | **GET** /events | Events organized by MilanoGreen


<a name="eventEventIdGET"></a>
# **eventEventIdGET**
> Event eventEventIdGET(eventId)

Find the event by its ID (identifier)

Returns an event, allows us to access a page of the specific event

### Example
```javascript
var MilanoGreenBackEnd = require('milano_green_back_end');

var apiInstance = new MilanoGreenBackEnd.EventApi();

var eventId = 789; // Number | ID of event to be returned


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventEventIdGET(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| ID of event to be returned | 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventEventIdRelatedServicesGET"></a>
# **eventEventIdRelatedServicesGET**
> Service eventEventIdRelatedServicesGET(eventId)

Connect Event to its Services

Get the Services related to an Event

### Example
```javascript
var MilanoGreenBackEnd = require('milano_green_back_end');

var apiInstance = new MilanoGreenBackEnd.EventApi();

var eventId = 789; // Number | ID of the event


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventEventIdRelatedServicesGET(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| ID of the event | 

### Return type

[**Service**](Service.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventsGET"></a>
# **eventsGET**
> [Event] eventsGET(opts)

Events organized by MilanoGreen

All the Events organized by the association, will specify the date of the event (including the month), the specific Service to which they are associated and the Person who is in charge of the organization of the Event.

### Example
```javascript
var MilanoGreenBackEnd = require('milano_green_back_end');

var apiInstance = new MilanoGreenBackEnd.EventApi();

var opts = { 
  'limit': 56, // Number | Maximum number of displayable Events per page
  'offset': 56 // Number | Pagination offset, default is 0
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Maximum number of displayable Events per page | [optional] 
 **offset** | **Number**| Pagination offset, default is 0 | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

