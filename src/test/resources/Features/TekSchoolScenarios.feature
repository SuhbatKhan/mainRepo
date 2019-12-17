Feature: Tek School Scenarios

  Background: 
    Given User is on TekSchool page
    And User Click on Test Environment link
    And User should see Test Environment page

  @SDET_003
  Scenario: SDET2019AUG_SDET_003_Execution
    When User click on myAccount menu on top of the page
    And User enter username 'teststudent@gmail.com' and password 'Tek@Test.com' in returning menu
    And User click on login button
    Then User should be logined in
   
    
	@SDET_003_SO
  Scenario Outline: SDET2019AUG_SDET_003_Execution with multiple user and password
    When User click on myAccount menu on top of the page
    And User click on login on myAccount menu
    And User enter username '<username>' and password '<password>' in returning menu
    And User click on login button
    Then User should be logined in
 
    
    Examples:
    |username|password|
    |teststudent@gmail.com|Tek@Test.com|
    |tekschool001@gmail.com|testtest|
    |testdata@gmail.com|testdata|
    #data table
    #and user fill the personal information section with below data
    # |name|lastmae|phone|email|password|passwordConfirmation|
    #|student|tekstudent|123123412|tek@gmial.com|123|123
     #|student|tekstudent|123123412|tek@gmial.com|123|123
     #|student|tekstudent|123123412|tek@gmial.com|123|123
    
    #what is the difference between scenario outline and datatable
    
    	#Scenario outline
    	#its runs the entire scenario based on rows in example keyword
    	
    	
    	 @SDET_RF
    Scenario: SDET2019_SDET_Register_form_Test
    
     When User click on myAccount menu on top of the page
     And User click on rigister on myAccount menu
     And User fill register form with below information
     # firstname|lastname|email|phone|password
     |Suhbat|Khan|jannan@gmail.com|5712909548|Test123|
     And User click on 'yes' radio button for subscribe
    And User click on continue button 
    Then User should see 'Your Account Has Been Created!' 
    
    @SDET_RF_SO
    Scenario Outline: SDET2019AUG_SDET_Register_Form_Test
    When User click on myAccount menu on top of the page
    And User click on register on myAccount menu
    And User fill register form with below information
   #firstname|lastName|email|phone|password|
    |Shaiq|Darwish|<email>|2021234455| Test123|
    And User click on '<radioButton>' radio button for Subscribe
    And User click on continue button
    Then User should see 'Your Account Has Been Created!'
	Examples:
	|email|radioButton|
	|ahmad1234@gmail.com|yes|
	|teacher@gmail.com|no|
	
	
		 @SDET_RF_DBV
    Scenario: SDET2019_SDET_Register_form_Test
    
     When User click on myAccount menu on top of the page
     And User click on rigister on myAccount menu
     And User fill register form with below information
     # firstname|lastname|email|phone|password
     |Suhbat|Khan|john.farnsworth@sakilacustomer.org|5712909548|Test123|
     And User click on 'yes' radio button for subscribe
    And User click on continue button 
    Then User should see 'Your Account Has Been Created!' 
    When User connect to DataBase
    And User sends query'select * from public.customer where email='john.farnsworth@sakilacustomer.org''
    
    
    
    
    
    
    
    
    
