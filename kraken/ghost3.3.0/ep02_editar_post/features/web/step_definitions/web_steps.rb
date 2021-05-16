if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'
  Then(/^I store a variable with the current url$/) do
    $url_variable = @driver.current_url    
    File.write('./.variable.txt', $url_variable)
    puts($url_variable) 
  end
  Given(/^I navigate to page with the url stored in the variable$/) do
    $url_variable = IO.read("./.variable.txt")  
    puts($url_variable)
    @driver.navigate.to $url_variable
    sleep 2 
  end
  Given(/^I login/) do
    begin
      @driver.find_element(:css, '.gh-btn').click
      @driver.find_element(:id, 'blog-title').send_keys('Hola');
      @driver.find_element(:id, 'name').send_keys('Daniel');
      @driver.find_element(:id, 'email').send_keys('tutoresmisoca@gmail.com');
      @driver.find_element(:id, 'name').send_keys(' Velasquez');
      @driver.find_element(:id, 'password').send_keys('FIm$zAHoj%');
      @driver.find_element(:css, '.gh-btn').click
    rescue
      @driver.find_element(:id, 'ember8').send_keys('tutoresmisoca@gmail.com')
      @driver.find_element(:id, 'ember10').send_keys('FIm$zAHoj%')
      @driver.find_element(:id, 'ember12').click
    end  
  end
end