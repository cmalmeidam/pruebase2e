if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'
end
When(/^I click on element having xpath "([^\"]*)"$/) do |xpath|
  @driver.find_element(:xpath, xpath).click
  sleep 2
 end

Given(/^I try to login/) do
  begin
    @driver.find_element(:css, '.gh-btn').click
    @driver.find_element(:id, 'blog-title').send_keys('$name_1');
    @driver.find_element(:id, 'name').send_keys('$name_2');
    @driver.find_element(:id, 'email').send_keys('pruebas@pruebas.com');
    @driver.find_element(:id, 'name').send_keys('$name_3');
    @driver.find_element(:id, 'password').send_keys('xjp3sftuof');
    @driver.find_element(:css, '.gh-btn').click
  rescue
    @driver.find_element(:id, 'ember8').send_keys('pruebas@pruebas.com')
    @driver.find_element(:id, 'ember10').send_keys('xjp3sftuof')
    @driver.find_element(:id, 'ember12').click
  end
end