Sub GetRpiDataWithApiKey()

    ' No need for "Const" keyword with Option Explicit enabled
    apiKey = yWKsytAeGTRdE0n0LZlix3mPxl7VkEBMTLVQ78ir
    apiUrl = "https://api.sam.gov/opportunities/v2/search" ' API endpoint URL

    ' No need to declare worksheet variable explicitly
    Set worksheet = ThisWorkbook.Sheets("Main-Listing") ' Output worksheet

    ' Build query parameters
    params = "?api_key=" & apiKey
    params = params & "&domain=Contract+Opportunities"
    ' ... (rest of query parameters)

    ' Create the HTTP object
    Set http = CreateObject("MSXML2.XMLHTTP")

    ' Open the connection
    http.Open "GET", apiUrl & params, False

    ' Set headers
    http.setRequestHeader "Content-Type", "application/json"

    ' Send the request
    http.send

    ' Check for successful response
    If http.Status = 200 Then
        ' Parse the JSON response
        Set jsonData = JsonConverter_ParseJson(http.responseText)

        ' Extract desired data and write to worksheet
        row = 1 ' Start writing from the first row
        For Each opportunity In jsonData("opportunities")
            ' Check for required notice type
            If InStr(1, opportunity("noticeType"), "Sources Sought") > 0 Or _
               InStr(1, opportunity("noticeType"), "Presolicitation") > 0 Or _
               ' ... (other notice types)
            Then
                col = 1 ' Start writing from the first column for each opportunity
                worksheet.Cells(row, col).Value = opportunity("title") ' Title
                col = col + 1
                worksheet.Cells(row, col).Value = opportunity("postedDate") ' Posted Date
                col = col + 1
                worksheet.Cells(row, col).Value = opportunity("description") ' Description
                ' ... (extract and write other desired data)
                row = row + 1
            End If
        Next opportunity

        ' Show success message
        MsgBox "Data downloaded successfully!", vbInformation, "RPI Data Download"
    Else
        ' Show error message
        MsgBox "Error downloading data: " & http.Status & " - " & http.statusText, vbCritical, "RPI Data Download"
    End If

End Sub

' Function to parse JSON data (unchanged)
Function JsonConverter_ParseJson(jsonString As String) As Variant
    Dim parser As Object
    Set parser = CreateObject("Scripting.Dictionary")
    parser.Parse jsonString
    Set JsonConverter_ParseJson = parser
End Function

