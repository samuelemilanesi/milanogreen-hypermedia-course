# MilanoGreenBackEnd.PeopleApi

All URIs are relative to *https://milanogreen.herokuapp.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**peopleGET**](PeopleApi.md#peopleGET) | **GET** /people | Staff of MilanoGreen
[**peoplePeopleIdGET**](PeopleApi.md#peoplePeopleIdGET) | **GET** /person/{peopleId} | Find the Person by her ID (identifier)
[**peoplePeopleIdRelatedEventsGET**](PeopleApi.md#peoplePeopleIdRelatedEventsGET) | **GET** /person/{peopleId}/related_events | Connect Person to its Events
[**peoplePeopleIdRelatedServicesGET**](PeopleApi.md#peoplePeopleIdRelatedServicesGET) | **GET** /person/{peopleId}/related_services | Connect Person to its Services


<a name="peopleGET"></a>
# **peopleGET**
> [People] peopleGET(opts)

Staff of MilanoGreen

All the people working in the Staff of MilanoGreen. This will specify their Name and Surname, role in the Association, their Motto and information contacts, consisting in both e-mail address and mobile phone number.

### Example
```javascript
var MilanoGreenBackEnd = require('milano_green_back_end');

var apiInstance = new MilanoGreenBackEnd.PeopleApi();

var opts = { 
  'limit': 56, // Number | Maximum number of displayable People per page
  'offset': 56 // Number | Pagination offset, default is 0
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.peopleGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Maximum number of displayable People per page | [optional] 
 **offset** | **Number**| Pagination offset, default is 0 | [optional] 

### Return type

[**[People]**](People.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="peoplePeopleIdGET"></a>
# **peoplePeopleIdGET**
> People peoplePeopleIdGET(peopleId)

Find the Person by her ID (identifier)

Returns a person, allows us to access a page of the specific profile

### Example
```javascript
var MilanoGreenBackEnd = require('milano_green_back_end');

var apiInstance = new MilanoGreenBackEnd.PeopleApi();

var peopleId = 789; // Number | ID of person to be returned


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.peoplePeopleIdGET(peopleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **peopleId** | **Number**| ID of person to be returned | 

### Return type

[**People**](People.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="peoplePeopleIdRelatedEventsGET"></a>
# **peoplePeopleIdRelatedEventsGET**
> Event peoplePeopleIdRelatedEventsGET(peopleId)

Connect Person to its Events

Get the events related to a person

### Example
```javascript
var MilanoGreenBackEnd = require('milano_green_back_end');

var apiInstance = new MilanoGreenBackEnd.PeopleApi();

var peopleId = 789; // Number | ID of the person


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.peoplePeopleIdRelatedEventsGET(peopleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **peopleId** | **Number**| ID of the person | 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="peoplePeopleIdRelatedServicesGET"></a>
# **peoplePeopleIdRelatedServicesGET**
> Service peoplePeopleIdRelatedServicesGET(peopleId)

Connect Person to its Services

Get the services related to a person

### Example
```javascript
var MilanoGreenBackEnd = require('milano_green_back_end');

var apiInstance = new MilanoGreenBackEnd.PeopleApi();

var peopleId = 789; // Number | ID of the person


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.peoplePeopleIdRelatedServicesGET(peopleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **peopleId** | **Number**| ID of the person | 

### Return type

[**Service**](Service.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

