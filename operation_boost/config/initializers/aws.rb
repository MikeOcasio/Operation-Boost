require 'aws-sdk-s3'

Aws.config.update({
  region: Rails.application.credentials.dig(:aws_s3, :region),
  credentials: Aws::Credentials.new(
    Rails.application.credentials.dig(:aws_s3, :access_key_id),
    Rails.application.credentials.dig(:aws_s3, :secret_access_key)
  )
})

# Define a constant for the S3 bucket
S3_BUCKET = Aws::S3::Resource.new.bucket(Rails.application.credentials.dig(:aws_s3, :bucket))
