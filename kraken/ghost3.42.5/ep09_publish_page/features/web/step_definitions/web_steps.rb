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
    @driver.find_element(:id, 'email').send_keys('tutoresmisoca@gmail.com');
    @driver.find_element(:id, 'name').send_keys('$name_3');
    @driver.find_element(:id, 'password').send_keys('FIm$zAHoj%');
    @driver.find_element(:css, '.gh-btn').click
  rescue
    @driver.find_element(:id, 'ember8').send_keys('tutoresmisoca@gmail.com')
    @driver.find_element(:id, 'ember10').send_keys('FIm$zAHoj%')
    @driver.find_element(:id, 'ember12').click
  end
end

AfterStep do |_scenario, test_step|
  $featurescenariostep ||= 0
  $url_variable = @driver.current_url
  $test_step_name = test_step.text.downcase.tr(" ", "_").gsub('"', '').delete_suffix('/')
  $test_name_clean =  $test_step_name.slice! "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368"
  $versionapp = @driver.current_url.start_with?("http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368") ? "version3_3_0" : "version3_4_2"
  Dir.mkdir("./screenshots") unless File.exist?("./screenshots")
  Dir.mkdir("./screenshots/#{$versionapp}") unless File.exist?("./screenshots/#{$versionapp}")
  dir = "./screenshots/#{$versionapp}"
  FileUtils.mkdir_p dir
  path = "#{dir}/paso#{$featurescenariostep}.png"
  @driver.save_screenshot(path)
  embed(path, 'image/png', File.basename(path))
  $featurescenariostep += 1
end